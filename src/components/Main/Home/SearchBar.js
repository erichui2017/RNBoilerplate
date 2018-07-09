
    import React, { Component } from 'react';
    import {
        ReactiveBase,
        TextField,
        ResultList,
        SelectedFilters,
    } from '@appbaseio/reactivesearch-native';
    import { Header, Item, Input, Icon, Button, Text } from 'native-base';
    import I18n from '../../../i18n';


    export default class SearchBar extends Component {        
        render() {
            return (
                <Header searchBar rounded>
                    {/* <ReactiveBase
                        app="good-books-ds"
                        credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
                    > */}
                        {/* <Item>
                            <Icon name="ios-search" /> */}
                            {/* <TextField
                                dataField="original_title.search"
                                componentId="BookSensor"
                            /> */}
                            {/* <Icon name="ios-people" />
                        </Item> */}
                        {/* <Button transparent>
                            <Text>{I18n.t('SearchBar.search')}</Text>
                        </Button> */}
			        {/* </ReactiveBase> */}
                </Header>
            );
        }
    }