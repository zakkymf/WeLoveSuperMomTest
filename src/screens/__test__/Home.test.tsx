import renderer from 'react-test-renderer';
import Home from '../Home';

describe('Home Screen', () => {
  it('render homescreen correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
