import renderer from 'react-test-renderer';
import Button from '../Button';

describe('Button Component', () => {
  it('render button correctly', () => {
    const tree = renderer
      .create(<Button label="Export to CSV" onPress={() => jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
