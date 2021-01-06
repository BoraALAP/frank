import { useState, useEffect } from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleMap, useLoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';

import Loading from "../../components/global/Loading";
import { Container } from "../../components/layout/Container";

const DEALER_QUERY = gql`
  query DEALER_QUERY($search: String) {
    allDealers(where: { OR: [{city_contains_i: $search},{name_contains_i:$search},{postal_contains_i:$search}] },sortBy: city_ASC) {
      postal
      city
      name
      province
      id
      venue{
        formattedAddress
        googlePlaceID
        lat
        lng
      }
    }
  }
`;

const containerStyle = {
  width: '100%',
  height: '400px'
};

const DealerFinder = (props) => {
  const [searchWord, setSearchWord] = useState("")
  const { data, loading, error, refetch} = useQuery(DEALER_QUERY,{
    fetchPolicy: "cache-and-network",
    variables: { search: searchWord }
  })
  const [locations, setLocations] = useState([])
  const [location, setLocation] = useState({lat: -3.745,
    lng: -38.523})
  

  useEffect(() => {
    //call db
    !loading && setLocations(data?.allDealers)
    navigator.geolocation.getCurrentPosition(function(position){
      setLocation({lat: position.coords.latitude, lng:position.coords.longitude })
    })
    
  }, [loading])

  useEffect(() => {
    //update state with new db after search
    !loading && data?.allDealers.length > 0 && setLocations(data?.allDealers)
  },[searchWord])

  //load google map and initilize
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
  })

  // if (loading) return <Loading />;
  if (error) return `Error! ${error}`;
    
  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchWord(e.target.value)
  }

  const handleClick = (position) => {
    setLocation({lat: position.lat, lng:position.lng })
  }

  return(
    <Container space padding>
      <Content>
      <Left>
        {(locations.length !== 0 ) ?  
          locations.map(item => {
            return (
              <Dealer key={item.id} onClick={()=>handleClick(item.venue)} active={location.lat === item.venue.lat && location.lng === item.venue.lng}>
                <h4>{item.city}</h4>
              <h6>{item.name}</h6>
              <p>{item.venue.formattedAddress}</p>
            </Dealer>
            )
          })
          :(<p>No Location Found</p>)}
      </Left>
      <Right>
        <Fixed>
          <p>Ostaco Windows and Doors products are proudly distributed by many retailers across Ontario. Please fill out this form and our team will quickly get back to you with information on your nearest dealer.</p>
          <Input  aria-label="search" id="search" name="q" onChange={handleChange} value={searchWord}/>
          
            {isLoaded ? (
              <>
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
                >
                  <MarkerClusterer 
                  // options={options}
                  >
                    {(clusterer) =>
                      locations.map((location) => (
                        <Marker key={location.id} position={{lat: location.venue.lat, lng: location.venue.lng}} clusterer={clusterer} />
                      ))
                    }
                  </MarkerClusterer>
                </GoogleMap>
              </>
            ) : <Loading /> 
            }
        </Fixed>
      </Right>
      </Content>
    </Container>
  )
}

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 3rem;
`;

const Input = styled.input`
  display: grid;
`;

const Left = styled.ol`
  display: grid;
  gap: 3rem;
  align-items:start;
  align-content:start;
`;

const Right = styled.aside`
  display: grid;
`;

const Fixed = styled.div`
  display: grid;
  grid-gap: 2vh;
  @media (min-width: 768px) {
    position: sticky;
    top: 5rem;
    height: min-content;
  }
`;

const Dealer = styled.li`
  padding-left: 5vw;
  grid-gap: 0.5em;
  h6, h4{
  color: ${props => props.active && props.theme.color.secondary};

  }

`;

export default DealerFinder;
