import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// setup enzyme for React v16 testing
Enzyme.configure({ adapter: new Adapter() })
