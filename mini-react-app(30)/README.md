# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



client side routing
    decide route layout
        header
        placehilder
        footer
    -install react-router
    -configure routing(connecting the paths)


#state management
    sharing state+keeping state sync accorss app

when we want to share props to a later child of the root node then those props must be passed to each and every child till it reaches the target node,hence to avoid this we use pipeline and above state management technique i.e redux/zustang -->larger applications
context api-smaler applications    

# context api
    -create context object(pipeline)
    -add state to context object(like water)

# context with use state hook is a best and simplenstate management mechanism for small applications but it creates unnecessary re-rendering issues when multiple state is part of a context
# to overcome this unnecessary re-renderig issue,create multiple contexts and make sure each context has a single state
# when the application size is huge then maintenance of multiple contexts will be come an issue.For such large applications advanced state mananagement tools like redux or zustand can be used