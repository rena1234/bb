import React from 'react';
import Enzyme, { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';
import fetchMock from 'jest-fetch-mock';
import TextField from '@material-ui/core/TextField';
import { waitFor } from '@testing-library/react';

import App from './App';

configure({ adapter: new Adapter() })
fetchMock.enableMocks();

describe('App', () => {
	let wrapper;

	beforeEach(() => {
    fetch.resetMocks();
	});

	it('renders', async () => {
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
        occupation: [''],
        portrayed: 'Bryan Cranston',
        status: 'Presumed Dead'
      }
    ]));
    act( () => {
      wrapper = mount(
        <App/>);
    });

    await waitFor(() => {
      expect(wrapper).not.toBeNull();
    });
	});

	it('updates', async () => {

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
        occupation: [''],
        portrayed: 'Bryan Cranston',
        status: 'Presumed Dead'
      }
    ]));

    act( () => {
      wrapper = mount(
        <App/>);
    });
    await waitFor(() => {
      wrapper.update();
      expect(wrapper.find('.character-name').text()).toEqual('Walter White');
    });

    fetch.mockResponseOnce(JSON.stringify([
      {
        appearance: [],
        better_call_saul_apperance: [],
        birthday: '09-07-1958',
        category: 'Breaking Bad',
        char_id: 1,
        img: '',
        name: 'Skyler White',
        nickname: '',
        occupation: [''],
        portrayed: '',
        status: ''
      }
    ]));


    const dateInput = wrapper.find(TextField).at(0).props();
    act( () => {
      dateInput.onChange({ target: { value: 'a'}, persist: jest.fn()});
    });
    await waitFor(() => {
      wrapper.update();
      expect(fetch).toHaveBeenCalledWith('https://www.breakingbadapi.com/api/characters?name=a');
      expect(wrapper.find('.character-name').text()).toEqual('Skyler White');
      expect(fetch).toHaveBeenCalledTimes(2);

    });
	});

  

});
