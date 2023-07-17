    // NOTE ->  I have tried to integrate apis using rapid api, serp Api, adzua and even more but some of them requires Internation payment
    //          and rest of them requires CORS configuration from server side which not feasible in my case.
    //          I tried even more with public api but same issue either they need authorisation key which i will only after entering credit                 card details
    //          or they need some sever side configuration.

    // I will just write here the steps which i would have done in case if i found job apis
    
    // 1. first i will collect my response in state variable.  
    //     ex - const [jobs, setJobs] = useState<jobList[]>([]);

    // 2. then if i need to use it in diff component, i will send it as props 
    //     ex- <Component jobs={jobs} />

    // 3. since we are using TypeScript i have define type of my props hence will define it like 
    //     interface Job {
    //       jobRole: string;
    //       companyName: string;
    //       location: string;
    //       pay: Number
    //     }

    // 4. in child component i will receive the props as 
    //      interface ChildComponentProps {
    //          jobs: Job[];
    //      }
    //    function childComponent ({ChildComponentProps: props})





This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
