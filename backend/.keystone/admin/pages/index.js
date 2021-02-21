import React from 'react';

import { HomePage } from '@keystone-next/admin-ui/pages/HomePage';
import { gql } from '@keystone-next/admin-ui/apollo';

export default function Home() {
  return (
    <HomePage
      query={gql`
        query {
          keystone {
            adminMeta {
              lists {
                key
                fields {
                  path
                  createView {
                    fieldMode
                  }
                }
              }
            }
          }
          User: _allUsersMeta {
            count
          }
          ProductCategory: _allProductCategoriesMeta {
            count
          }
          Product: _allProductsMeta {
            count
          }
          Operation: _allOperationsMeta {
            count
          }
          Imagine: _allImaginesMeta {
            count
          }
          Dealer: _allDealersMeta {
            count
          }
          ContactUsForm: _allContactUsFormsMeta {
            count
          }
          Screen: _allScreensMeta {
            count
          }
          Interior: _allInteriorsMeta {
            count
          }
          HardwareKit: _allHardwareKitsMeta {
            count
          }
          GlassColor: _allGlassColorsMeta {
            count
          }
          Glass: _allGlassesMeta {
            count
          }
          Exterior: _allExteriorsMeta {
            count
          }
          DividedLite: _allDividedLitesMeta {
            count
          }
          BrickmouldAndTrim: _allBrickmouldAndTrimsMeta {
            count
          }
          Role: _allRolesMeta {
            count
          }
        }
      `}
    />
  );
}
