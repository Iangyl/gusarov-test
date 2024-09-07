# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Icons

I make icons separate textfield components, because this approach more flexible and give ability to change icons and control them.
So that's why you can observe that color of icons does not change when you clear `error` message. Because they controlled by parent element/component.

![error](http://url/to/img.png)
![error disappear](http://url/to/img.png)
