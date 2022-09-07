import renderer from 'react-test-renderer';
import Home from '../Home';
import {homeStore} from '../Home/HomeStore';

describe('Home Screen', () => {
  it('render homescreen correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('lowercase properly', () => {
    expect(homeStore.toLowerCase('Hello World')).toBe('hello world');
  });

  it('uppercase properly', () => {
    expect(homeStore.toUpperCase('Hello World')).toBe('HELLO WORLD');
  });

  it('parseString properly', () => {
    expect(homeStore.parseString('hello world')).toBe('hElLo wOrLd');
  });
});
