# Frontend Mentor - Kanban Task Manager

[Frontend Mentor](https://www.frontendmentor.io/)

[Kanban Task Manager Challenge](https://www.frontendmentor.io/challenges/kanban-task-management-web-app-wgQLt-HlbB)

![k-pop site image](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1648844684/CleanShot_2022-04-01_at_16.23.40_2x_oo3ppe.jpg)

Deployed Site: [Netlify](https://glowing-malasada-cc04cd.netlify.app)

Running Remix on the [K-pop stack](https://github.com/netlify-templates/kpop-stack)

## What's in the stack

- [Netlify](https://netlify.com/) deployment to the [Edge](https://www.netlify.com/products/edge) + deploy previews and CI/CD
- [Supabase](https://supabase.com/) database and authentication
- [Tailwind](https://tailwindcss.com/) for styling
- [Cypress](https://cypress.io) end-to-end testing
- [Prettier](https://prettier.io) code formatting
- [ESLint](https://eslint.org) linting
- [TypeScript](https://typescriptlang.org) static typing

---

## Development

```sh
npm install
```

### Running Locally

```sh
npm run dev
```

You will need to set up Supabase as described on the K-pop stack page and then set the variables in `.env` based on the `.env.sample` file.

### Relevant code:

- creating users, and logging in and out [./app/models/user.server.js](./app/models/user.server.js)
- user sessions, and verifying them [./app/session.server.js](./app/session.server.js)
