import { debounce } from "lodash";
import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { Accordion, Button, Header, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { BrandsState } from "../../redux/brands/data";
import { 
  addFilter as addFilterAction,
  deleteFilter as deleteFilterAction,
  clearFilters as clearFiltersAction
} from "../../redux/filters/actions";
import { FiltersState } from "../../redux/filters/data";
import { FiltersActions } from "../../redux/filters/types";
import { ApplicationState } from "../../redux/types";
import { GenericCallBack, getBrandImage, getBrandName, getCategoryName, toTitleCase } from "../../utils/utils";
import SliderView from 'semantic-ui-react-slider';
import SearchBar from "../SearchBar/SearchBar";
import FilterChip from "../FilterChip/FilterChip";
import { CategoriesState } from "../../redux/categories/data";

export interface FiltersPanelProps extends 
  FiltersState,
  FiltersActions,
  BrandsState,
  CategoriesState
{
  isOpen: boolean;
  setIsOpen: GenericCallBack;
}

const StyledSticky = styled.div`
  position: sticky;
  top: 0;
  z-index: 1001;
  background-color: ${props => props.theme.content.pageBackground};
`;

const StyledAccordion = styled(Accordion)`
  border-bottom: 1px solid ${props => props.theme.content.border};
  &&& .title {
    .filters-label, .selected-filters-label {
      font-variant-caps: all-small-caps;
      padding: 0 10px;
      font-weight: 900;
      font-size: 140%;
      i.chevron {
        position: relative;
        top: -3px;
      }
      .label {
        float: right;
      }
    }
    .selected-filters-container {
      padding: 0 10px;
    }
  }
  &&&&&& .content {
    padding-bottom: 7px;
  }
  .header {
    margin-bottom: 5px;
    padding-left: 14px;
    font-variant-caps: all-small-caps;
  }
  .clear-button-container {
    text-align: center;
    margin-bottom: 7px;
    button {
      background-color: ${props => props.theme.colors.primary.normal};
      color: ${props => props.theme.colors.grey.white};
      font-weight: 100;
      border-radius: 0;
      padding: 15px 40px;
    }
  }
`;

const StyledBrandsFilter = styled.div`
  overflow-x: auto;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  ::-webkit-scrollbar { /* Chrome, Safari and Opera */
    display: none;
  }
  .brands-filter-container {
    display: inline-flex;
  }
`;

const StyledBrandCard = styled.div<{ isSelected: boolean }>`
  margin-right: 10px;
  width: 120px;
  height: 120px;
  border: 1px solid ${props => props.isSelected ? props.theme.colors.primary.normal : props.theme.content.border};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  filter: grayscale(${props => props.isSelected ? '0' : '100'}%);
  .image-container {
    height: 80px;
    width: 100%;
    display: flex;
    text-align: center;
    opacity: ${props => props.isSelected ? '1' : '0.2'};
  }
  img {
    width: 100%;
    margin: auto;
  }
  .name-container {
    font-weight: 900;
    font-variant-caps: all-small-caps;
    font-size: 110%;
    opacity: ${props => props.isSelected ? '1' : '0.3'};
    color: ${props => props.isSelected ? props.theme.colors.primary.normal : props.theme.colors.grey.black};
  }
  :first-child {
    margin-left: 14px;
  }
`;

const StyledSliderView = styled(SliderView)`
  margin: 10px 30px !important;
  > div:first-child {
    top: 5px;
    height: 4px !important;
    background-color: ${props => props.theme.colors.primary.lightest} !important;
  }
  .slider-tracks > div {
    top: 5px;
    height: 4px !important;
    background-color: ${props => props.theme.colors.primary.normal} !important;
  }
  .slider-handles > div {
    border: 13px double ${props => props.theme.colors.grey.white};
    background-color: ${props => props.theme.colors.primary.normal} !important;
  }
  .slider-handles > div > div {
    position: relative;
    margin-top: -33px !important;
    width: 30px;
    left: -15px;
    color: ${props => props.theme.colors.primary.normal};
    font-weight: 900;
  }
`;

export const FiltersPanel: React.FC<FiltersPanelProps> = ({
  filters,
  categories,
  addFilter,
  deleteFilter,
  clearFilters,
  brands,
  isOpen,
  setIsOpen
}: FiltersPanelProps) => {
  const [isSelectedFiltersOpen, setIsSelectedFiltersOpen] = useState<boolean>(false);
  // price filter logic
  const debounceUpdatePriceFilter = (minValue: number, maxValue: number) => {
    addFilter({
      priceFrom: minValue,
      priceTo: maxValue
    })
  };
  const onSliderValuesChange = useCallback(
    debounce(debounceUpdatePriceFilter, 500), []
  );

  // brands filter logic
  const toggleArrayTypeFilter = (filterName: string, element: any) => {
    if (filters[filterName] === undefined) { // filter doesn't exist [add]
      addFilter({
        [filterName]: [element]
      })
    } else { // filter exists
      if (filters[filterName].includes(element)) { // element exists [delete]
        if (filters[filterName].length > 1) {
          addFilter({
            [filterName]: filters[filterName].filter(data => data !== element)
          })
        } else {
          deleteFilter(filterName);
        }
      } else { // element doesn't exist [add]
        addFilter({
          [filterName]: [...filters[filterName], element]
        })
      }
    }
  }

  const isAnyFilterSelected = filters && Object.keys(filters).length > 0;

  return (
    <StyledSticky>
      <SearchBar />
      <StyledAccordion>
        <Accordion.Title
          active={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="filters-label" data-testid="filters-label">
            <Icon name={isOpen ? 'chevron up' : 'chevron down'} size={'large'} />
            Filters
            {isAnyFilterSelected && 
              <FilterChip
                text="Clear Filters"
                onClick={() => clearFilters()}
              />
            }
          </div>
          {isAnyFilterSelected && 
            <Accordion>
              <Accordion.Title
                data-testid="selected-filters-label-test"
                active={isSelectedFiltersOpen}
                onClick={e => {
                  e.stopPropagation();
                  setIsSelectedFiltersOpen(!isSelectedFiltersOpen)
                }}
              >
                <div className="selected-filters-label">
                  <Icon name={isSelectedFiltersOpen ? 'chevron up' : 'chevron down'} size={'large'} />
                  Selected Filters
                </div>
              </Accordion.Title>
              <Accordion.Content active={isSelectedFiltersOpen}>
                <div className="selected-filters-container" data-testid="selected-filters-container-test">
                  {(filters && Object.keys(filters)
                    .filter(key => key !== "priceTo")
                    .map(key => {
                      if (key === "brands") {
                        return (filters.brands?.map(brandId => {
                          return (
                            <FilterChip
                              key={key+brandId}
                              text={getBrandName(brands, brandId)}
                              image={getBrandImage(brands, brandId)}
                              onClick={() => toggleArrayTypeFilter("brands", brandId)}
                            />
                          )
                        }))
                      } else if (key === "categories") {
                        return (filters.categories?.map(categoryId => {
                          return (
                            <FilterChip
                              key={key+categoryId}
                              text={"Category: " + getCategoryName(categories, categoryId)}
                              onClick={() => toggleArrayTypeFilter("categories", categoryId)}
                            />
                          )
                        }))
                      } else if (key === "priceFrom") {
                        return (
                          <FilterChip
                            key={key}
                            text={"Price: " + filters.priceFrom + " to " + (filters.priceTo || 1000)}
                            onClick={() => {
                              deleteFilter("priceFrom");
                              deleteFilter("priceTo");
                            }}
                          />
                        )
                      } else {
                        return (
                          <FilterChip
                            key={key}
                            text={toTitleCase(key) + ": " + filters[key]}
                            onClick={() => deleteFilter(key)}
                          />
                        )
                      }
                    })
                  )}
                </div>
              </Accordion.Content>
            </Accordion>
          }
        </Accordion.Title>
        <Accordion.Content active={isOpen} data-testid="filters-container-test">
          <Header>Brands</Header>
          <StyledBrandsFilter>
            <div className="brands-filter-container">
              {brands?.map(brand => (
                <StyledBrandCard
                  key={brand.id}
                  isSelected={!!filters.brands?.includes(brand.id)}
                  onClick={() => toggleArrayTypeFilter("brands", brand.id)}
                >
                  <div className="image-container"><img src={brand.image} alt={brand.name + " brand image"} /></div>
                  <div className="name-container">{brand.name}</div>
                </StyledBrandCard>
              ))}
            </div>
          </StyledBrandsFilter>
          <Header>Price</Header>
          <StyledSliderView
            onSliderValuesChange={onSliderValuesChange}
            sliderMinValue={0}
            sliderMaxValue={1000}
            selectedMinValue={filters?.priceFrom || 0}
            selectedMaxValue={filters?.priceTo || 1000}
          />
          <div className="clear-button-container">
            <Button onClick={clearFilters}>Clear all filters</Button>
          </div>
        </Accordion.Content>
      </StyledAccordion>
    </StyledSticky>
  )
}

function mapStateToProps(
  state: ApplicationState
): FiltersState & BrandsState & CategoriesState {
  const { filters, brands, categories } = state;
  return {
    filters: filters.filters,
    brands: brands.brands,
    categories: categories.categories
  };
}
  
const mapActionToProps: Partial<FiltersActions> = {
  addFilter: addFilterAction,
  deleteFilter: deleteFilterAction,
  clearFilters: clearFiltersAction
};

export default connect(
  mapStateToProps,
  mapActionToProps
 )(FiltersPanel);