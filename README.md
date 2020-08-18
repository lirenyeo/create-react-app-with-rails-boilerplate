# Rails 6 + Create React App Boilerplate

## Key Features

#### Rails Devise handles user authentications 🔑
- This allows us to utilize [Devise](https://github.com/heartcombo/devise)'s modules (Email Confirmation, Forget password, Remember Me, etc)
- Since CRA will share the same domain with Rails, it can access logged in user via cookie

#### ActiveAdmin on Rails side 👩‍💼
- [ActiveAdmin](https://activeadmin.info/) makes it simple for developers to implement beautiful and elegant admin interfaces with very little effort

#### styled-components 😍
- While user authentiation pages will consume the good ol' SCSS from asset piplines (we omit webpacker from rails), the react pages will use the very best [styled-components](https://styled-components.com/) to keep the concerns of styling and element architecture separated and make components more readable.

#### Best of both worlds 🔥
- We get to keep everything that we love about [create-react-app](https://github.com/facebook/create-react-app), and the ability to scale front and back ends accordingly

#### And all the important things...
- Redux + Thunk
- React Router
- Bootstrap
- Axios
