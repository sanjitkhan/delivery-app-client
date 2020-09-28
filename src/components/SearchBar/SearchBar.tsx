import { debounce } from "lodash";
import React from "react";
import { useState, useCallback } from "react";
import { connect } from "react-redux";
import { Button, Dropdown, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { FiltersActions } from "../../redux/filters/types";
import { ItemsState, ItemState } from "../../redux/items/data";
import { ApplicationState } from "../../redux/types";
import { 
  addFilter as addFilterAction
} from "../../redux/filters/actions";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppRoutes } from "../../routes/routes";
import { BrandsState } from "../../redux/brands/data";
import { CategoriesState } from "../../redux/categories/data";
import { getBrandName, getCategoryName } from "../../utils/utils";

interface SearchBarProps extends
  ItemsState,
  BrandsState,
  CategoriesState,
  FiltersActions,
  RouteComponentProps
{}

const StyledSearchBarContainer = styled.div`
  padding: 20px 20px 10px 20px;
  display: flex;
  && .dropdown {
    border-radius: 0;
    border: 1px solid ${props => props.theme.content.border};
  }
  && button {
    background-color: ${props => props.theme.colors.primary.normal};
    color: ${props => props.theme.colors.grey.white};
    border-radius: 0;
    padding: 10px 12px;
    i {
      margin: 0 !important;
    }
  }
  &&&& .item {
    padding: 10px !important;
  }
  &&& .menu {
    max-height: 60vh;
  }
`;

const StyledSearchOptionCard = styled.div`
  display: flex;
  .image-container {
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    img {
      height: 100%;
    }
  }
  .details-container {
    padding: 0 10px;
    div {
      margin-bottom: 3px;
    }
    .detail-brand {
      font-variant-caps: all-small-caps;
      font-size: 80%;
    }
    .detail-price {
      font-weight: 700;
      font-size: 90%;
    }
    .detail-name {
      font-size: 90%;
    }
  }
`;

export const SearchBar: React.FC<SearchBarProps> = ({
  history,
  items,
  brands,
  categories,
  addFilter
}:SearchBarProps) => {
  const getSearchOptionCard = (item: ItemState) => {
    return (
      <StyledSearchOptionCard>
        <div className="image-container">
          <img src={item.image} alt={item.name + " item image"} />
        </div>
        <div className="details-container">
          <div className="detail-brand">{getBrandName(brands, item.brand)}</div>
          <div className="detail-name">{item.name}</div>
          <div className="detail-price">Rs. {item.price}</div>
        </div>
      </StyledSearchOptionCard>
    );
  };
  const getDropdownOptions = (items: ItemState[]) => {
    return items.map(item => {
      return {
        key: item.id,
        value: item.id,
        text: item.name + 
              getBrandName(brands, item.brand) + 
              item.categories.map(categoryId => 
                getCategoryName(categories, categoryId)
              ).join(''),
        content: getSearchOptionCard(item)
      }
    });
  }
  const [queryText, setQueryText] = useState<string>('');
  const dropdownOptions = getDropdownOptions(items);
  const debounceUpdateSearchResults = (e: any, { searchQuery }) => {
    setQueryText(searchQuery);
  };
  const onSearchQueryChange = useCallback(
    debounce(debounceUpdateSearchResults, 500), []
  );
  return (
    <StyledSearchBarContainer>
      <Dropdown
        placeholder='Search'
        data-testid="items-search-test"
        fluid
        search
        selection
        icon=''
        lazyLoad
        selectOnNavigation={false}
        selectOnBlur={false}
        value={queryText}
        onSearchChange={onSearchQueryChange}
        options={dropdownOptions}
        minCharacters={3}
      />
      <Button type="submit" onClick={() => {
        addFilter({ name: queryText });
        setQueryText('');
        history.push(AppRoutes.PRODUCTS);
      }}>
        <Icon name='search' />
      </Button>
    </StyledSearchBarContainer>
  );
};

function mapStateToProps(
  state: ApplicationState
): ItemsState
  & BrandsState
  & CategoriesState
{
  const { items, brands, categories } = state;
  return {
    items: items.items,
    brands: brands.brands,
    categories: categories.categories
  };
}
  
const mapActionToProps: Partial<FiltersActions> = {
  addFilter: addFilterAction
};

export default connect(
  mapStateToProps,
  mapActionToProps
 )(withRouter(SearchBar));