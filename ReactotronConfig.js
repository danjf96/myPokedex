import Reactotron, { networking } from "reactotron-react-native"
import { reactotronRedux } from "reactotron-redux"

// const reactotronConfig = {
//   initiate: () => {
//     Reactotron.configure({ 
//         name: 'My Pokedex Debugging',
//     })
//     .useReactNative()
//     .use(reactotronRedux())
//     .use(networking({
//       ignoreContentTypes: /^(image)\/.*$/i,
//       ignoreUrls: /\/(logs|symbolicate)$/,
//     }))
//     .connect();
//   },
//   createEnhancer: () => Reactotron.createEnhancer()
// }
const reactotron = Reactotron.configure({ name: 'My Pokedex'})
    .useReactNative()
    .use(reactotronRedux())
    .use(networking({
      ignoreContentTypes: /^(image)\/.*$/i,
      ignoreUrls: /\/(logs|symbolicate)$/,
    }))
    .connect();

export default reactotron