import React from 'react';
import { Home } from './index'
import { shallow } from 'enzyme'
describe("<Home/>", () => {
    let component;
    beforeEach(() => {
        component = shallow(<Home/>)
    })

    it("renders that app component", () => {
        expect(component.find('iframe')).toHaveLength(1)
    })
})