import React from 'react';
import Enzyme, { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';
import fetchMock from 'jest-fetch-mock';
import { waitFor } from '@testing-library/react';

import CardsContainer from './CardsContainer.js';
import { SearchProvider } from 'Contexts/Context.js';

configure({ adapter: new Adapter() })
fetchMock.enableMocks();

describe('CardsContainer', () => {
	let wrapper;

	beforeEach(() => {
    fetch.resetMocks();
	});

	it('renders correctly', async () => {
    fetch.mockResponseOnce(JSON.stringify([
      {
        appearance: [],
        better_call_saul_apperance: [],
        birthday: '09-07-1958',
        category: 'Breaking Bad',
        char_id: 1,
        img: '',
        name: 'Walter White',
        nickname: 'Heisenberg',
        occupation: '',
        portrayed: 'Bryan Cranston',
        status: 'Presumed Dead'
      }
    ]));
    act( () => {
      wrapper = mount(
        <SearchProvider value={[]}>
          <CardsContainer pageSize={8}/>
        </SearchProvider>
      );
    });

    await waitFor(() => {
      expect(wrapper).not.toBeNull();
      wrapper.update();
      expect(wrapper.find('.character-name').text()).toEqual('Walter White');
    });
	});

	it('pages', async () => {

    fetch.mockResponseOnce(JSON.stringify([
      {
        name: 'a',
      },
      {
        name: 'b',
      },
      {
        name: 'c',
      },
    ]));

    act( () => {
      wrapper = mount(
        <SearchProvider value={[]}>
          <CardsContainer pageSize={2}/>
        </SearchProvider>
      );
    });

    await waitFor(() => {
      wrapper.update();
      act( () => {
        wrapper.find('#page-button-1').simulate('click');
      });
      wrapper.update();
      expect(wrapper.find('.character-name').text()).toEqual('c');
    });

	});

});
