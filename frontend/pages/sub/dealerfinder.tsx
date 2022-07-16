/* eslint-disable no-undef */
/* global google */
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { AnimatePresence, motion } from "framer-motion";
import {
  GoogleMap,
  Autocomplete,
  Marker,
  MarkerClusterer,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";

import { Loading } from "../../UI/Loading";
import { Container } from "../../components/layout/Container";

import { Button, ButtonS } from "../../UI/Links";

const DEALER_QUERY = gql`
  query DEALER_QUERY($search: String) {
    allDealers(
      where: {
        OR: [
          { city_contains_i: $search }
          { name_contains_i: $search }
          { postal_contains_i: $search }
        ]
      }
      sortBy: city_ASC
    ) {
      id
      name
      googlePlaceID
      formattedAddress
      lat
      lng
      city
      postal
      phone
      email
      person
      province
    }
  }
`;

const containerStyle = {
  width: "100%",
  height: "100%",
};

const DealerFinder = (props) => {
  const [searchWord, setSearchWord] = useState("");
  // /**@type React.MutableRefObject<HTMLInputElement> */

  interface RefObject {
    current: object;
    value: string;
  }
  const inputRef = useRef<RefObject>();

  const { data, loading, error, refetch } = useQuery(DEALER_QUERY, {
    fetchPolicy: "cache-and-network",
    variables: { search: searchWord },
  });
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState({
    lat: 43.808076,
    lng: -79.4959531,
  });
  const [marker, setMarker] = useState("");

  useEffect(() => {
    //call db
    !loading && setLocations(data?.allDealers);
  }, [loading]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  // load google map and initilize
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
    libraries: ["places", "geometry"],
  });

  if (error) return `Error! ${error}`;

  if (loadError && isLoaded) {
    return (
      <Container space padding title="Dealer Finder">
        <div>Map cannot be loaded right now, sorry.</div>;
      </Container>
    );
  }

  let geocoder;

  if (isLoaded) {
    geocoder = new google.maps.Geocoder();
  }

  const geocodeFunc = (request: google.maps.GeocoderRequest): void => {
    geocoder
      .geocode(request)
      .then((result) => {
        const { results } = result;

        // map.setCenter(results[0].geometry.location);
        // marker.setPosition(results[0].geometry.location);
        // marker.setMap(map);
        // responseDiv.style.display = "block";
        // response.innerText = JSON.stringify(result, null, 2);
        setLocation({
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        });

        results[0].address_components.map((item) => {
          if (item.types.includes("locality")) {
            setSearchWord(item.long_name);
          }
        });

        return results;
      })
      .catch((e) => {
        alert("Geocode was not successful for the following reason: " + e);
      });
  };

  const handleSubmit = (e) => {
    geocodeFunc({ address: inputRef?.current?.value });
    e.preventDefault();

    // setSearchWord(e.target.value);
  };

  const handleClick = (position) => {
    setLocation({
      lat: parseFloat(position.lat),
      lng: parseFloat(position.lng),
    });
  };

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  return (
    <Container space padding title="Dealer Finder">
      <Content>
        <Left>
          {!loading && locations.length !== 0 ? (
            locations.map((item) => {
              return (
                <AnimatePresence exitBeforeEnter initial={false} key={item.id}>
                  <li
                    onClick={() => {
                      handleClick(item);
                      setMarker(item.id);
                    }}
                  >
                    <Dealer
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      active={
                        location.lat === parseFloat(item.lat) &&
                        location.lng === parseFloat(item.lng)
                      }
                    >
                      <h4>{item.city}</h4>
                      <h6>{item.name}</h6>

                      <p>{item.formattedAddress}</p>
                      {/* <p>{item.person}</p>
                      <a href={`mailto: ${item.email}`}>{item.email}</a>
                      <a href={`tel: +1${item.phone}`}>{item.phone}</a> */}
                      <a
                        href={`https://www.google.com/maps/place/?q=place_id:${item.googlePlaceID}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Find it on Google
                      </a>
                    </Dealer>
                  </li>
                </AnimatePresence>
              );
            })
          ) : (
            <AnimatePresence exitBeforeEnter initial={false}>
              <p>No Location Found</p>
            </AnimatePresence>
          )}
        </Left>
        <Right>
          <Fixed>
            <p>
              Frank has many great dealers across Ontario. Please put in your
              town.
            </p>
            <Row>
              {isLoaded && (
                <Autocomplete>
                  <Input
                    aria-label="city"
                    id="city"
                    name="q"
                    onChange={handleChange}
                    value={searchWord}
                    ref={inputRef}
                    placeholder="What city are you looking for?"
                  />
                </Autocomplete>
              )}
              <ButtonS
                type="submit"
                onClick={handleSubmit}
                disabled={searchWord === ""}
              >
                Search
              </ButtonS>
            </Row>

            <GoogleContainer>
              {isLoaded ? (
                <>
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={location}
                    zoom={10}
                  >
                    <MarkerClusterer>
                      {(clusterer) =>
                        locations.map((location) => {
                          return (
                            <Marker
                              onClick={() => setMarker(location.id)}
                              key={location.id}
                              position={{
                                lat: parseFloat(location.lat),
                                lng: parseFloat(location.lng),
                              }}
                              clusterer={clusterer}
                            >
                              {marker === location.id && (
                                <InfoWindow
                                  key={location.id}
                                  position={{
                                    lat: parseFloat(location.lat),
                                    lng: parseFloat(location.lng),
                                  }}
                                >
                                  <div>
                                    <h6>{location.name}</h6>
                                    <p>{location.formattedAddress}</p>
                                  </div>
                                </InfoWindow>
                              )}
                            </Marker>
                          );
                        })
                      }
                    </MarkerClusterer>
                  </GoogleMap>
                </>
              ) : (
                <Loading />
              )}
            </GoogleContainer>
          </Fixed>
        </Right>
      </Content>
    </Container>
  );
};

const Content = styled.div`
  display: grid;
  gap: 3rem;
  grid-auto-flow: row;
  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
    grid-template-columns: 2fr 3fr;
  }
`;

const GoogleContainer = styled.div`
  display: grid;
  order: 0;
  min-height: 400px;
  @media screen and (min-width: 768px) {
    order: 1;
  }
`;

const Input = styled.input`
  display: grid;
  order: 1;
  @media screen and (min-width: 768px) {
    order: 0;
  }
`;

const Left = styled.ol`
  display: grid;
  gap: 3rem;
  align-items: start;
  align-content: start;
  order: 1;
`;

const Right = styled.aside`
  display: grid;
  order: 0;
  @media screen and (min-width: 768px) {
    order: 1;
  }
`;

const Fixed = styled.div`
  display: grid;
  grid-gap: 2vh;
  @media (min-width: 768px) {
    position: sticky;
    top: 5rem;
    align-content: start;
  }
`;

const Dealer = styled(motion.button)`
  display: grid;
  padding-left: 5vw;
  grid-gap: 0.5em;
  text-align: left;
  grid-auto-flow: row;
  h6,
  h4 {
    color: ${(props) => props.active && `var(--color-secondary)`};
    transition: all 0.4s ease-in-out;
  }
`;

const Row = styled.form`
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;
  grid-template-columns: 1fr auto;
  div {
    display: grid;
  }
`;

export default DealerFinder;
