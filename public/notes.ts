// dynamic routes with folder [variablename] eg: [id]
// eg: localhost:3000/users/stevemartin

// fetching id from dynamic route and pass to page.tsx with params

// organizational folder with (foldername)

// reserved file layout.tsx to style specific routes

// old nextjs with pages router we had to write api router
// now we use the api folder to hold api routes for personal pref
// api route will not be named with .tsx extension but .ts only !!!!!!!!!

// folder outside of routing system _foldername to exclude from routes


// CHAP 1 MARKETING PAGE / LANDING PAGE
// use cn lib to combine tailwind styles with custom styles. eg used for custom imported fonts!

// !!!!! no export default when writing components
// use export for default layouts and pages
// use asChild on button if you're going to have a link nested in shadcn button


// CHAP 2 AUTHENTICATION
// site config in main layout using template synthax %s
// after setting up middleware allow non-logged-in users to be able to visit the home/landing page
// test Clerk server components and client components. note here that is function start with "use" eg useAuth then it's a client component!

// e.g. with "use client"
// "use client";

// import { useAuth, useUser } from "@clerk/nextjs";

// const ProtectedPage = () => {
//   const { userId } = useAuth();
//   const { user } = useUser();

//   return (
//     <div>
//       User: {user?.firstName}
//       UserId: {userId}
//     </div>
//   );
// };

// export default ProtectedPage;

// e.g. with "user server"
// import { auth, currentUser } from "@clerk/nextjs"

// const ProtectedPage = async () => {
//   const user = await currentUser();
//   const {userId} = auth()

//   return (
//     <div>
//       User: {user?.firstName}
//       UserId: {userId}
//     </div>
//   )
// }

// export default ProtectedPage

// redirected to slug with :id for e.g. afterSelectOrganizationUrl="/organization/:id"
// handle redirect to organization selection page instead of landing page for logged in users in middleware
// these features are enabled by Clerk


// CHAP 3 SIDEBAR
// change organization based on URL pasted in address bar using useEffect and next/navigation useParams with clerk's organizationList

// packages for sidebar: 
// use-hooks-ts(compilation of usefull hooks to use which are type safe)
// shadcn skeleton & accordion & separator
// using storageKey to keep track of what is opened and closed in sidebar when page is refreshed
// const {organization: activeOrganization} this is just aliasing organization to activeOrganization as in renaming it

// create a hook to control the state of the mobile sidebar eg. open/closed also sidebar should close when user clicks on a link with ZUSTAND and shadcn sheet
// finish skeleton sidebar


// CHAP 4 SETTING PAGE
// import organizationProfile from clerk


// CHAP 5 DATABASE & SERVER ACTIONS
// npm i -D prisma
// npx prisma init # generate files (prisma folder, schema and db url in .env which we will replace with PlanetScale)
// run npx prisma generate after creating new models or modifying existing models
// npx prisma db push # push to planetscale to sync

// npm i @prisma/client to use prisma in our app
// npx prisma studio for local UI of our db

// npm i zod for validation!

// use revalidatePath in your server action to refetch and display submitted data!!!
// we created two server actions to test mutations

// how to create loading states and display errors in our fields at 3h40min in Antonio's video. This is important!


// CHAP 6 USEACTION ABSTRACTIONS
// combining form states, validation and server actions into one folder


// CHAP 7 FORM COMPONENT
// creating re-usable input and submit buttons in compoments and replacing the ones we hard corded earlier


// CHAP 8 BOARD POPOVER FORM
// create onClick popover and connect to Unsplash api
// create toast components with sonner


// CHAP 9 FORM PICKER
// connect to unsplash api
// register as a dev on unspalsh
// npm i unsplash-js
// create fallback for 50 request api to unsplash limit

// reset database npx prisma migrate reset
// new schema or upaated schema with npx prisma db push
// npx prisma generate to locally generate new types


// CHAP 10 BOARD LIST
// create a loading state for the boards and wrap boardlist in suspense with fallback


// CHAP 11 BOARD PAGE
// display name of organization in browser tab
// npm i lodash and npm i -D @types/lodash for types to access metadata title

// redirect to 404 page with new next14 notFound from next
//navigation

// useState and useRef to change element to input when clicked on, register its initial value to input and submit through form to update data title
// create delete button. all in action folder

// CHAP 12 LISTS & CARDS
// keeping track of button inputs like escape on keydown with event listener from "usehooks" that we installed
// or if we click outside the form to disable editing with formRef

// create server action for click submit to add a new list item


// CHAP 13 LIST HEADER / OPTIMISTIC MUTATIONS
// assign orderedData to a useState before it's passed to the database for optimized user experience because we're gonna be dragging and dropping items to different cards
// optimistic mutations


// CHAP 14 LIST OPTIONS
// harness actions to copy and delete lists


// CHAP 15 CARD FORM
// create form to create cards or tasks in list and learn drag and drop
// bits of juggling here with component props and forwardRef from react - might wanna rewatch that!
// create re-usable component for the textarea

// iterate through added card and display them
// - we already have the cards in list-item!


// CHAP 16 DRAG AND DROP!!!!!
// npm i @hello-pangea/gng
// this is like react beautiful dnd but this is now deprecated
// import everything from dnd in your list-container
// same thing must be done for the list-item

// we need some optimistic server rendering again!
// so we're saving list and card order changes in memory before DB
// then we apply changes with server actions


// CHAP 17 CARD MODAL
// make a zustand hook for the modal that will also take in an id.
// install disalog from shadcn
// we're gonna have to create an api route to fetch card data from the server because of use client in dialogs and cards
// using npm i @tanstack/react-query
// this won't turn everything to client components because we're passing fetches through children

// create api route
// create re-usable fetcher now


// CHAP 18 CARD ACTIONS


// CHAP 19 ACTIVITY / AUDIT LOGS
// npm i date-fns


// CHAP 20 PAYMENT
// npx prisma migrate reset to clear DB
// create a const called board


// stripe subscription
// add stripe table to db
// npm i stripe

// create lib to confirm subcription
// !!isValid; // turned to boolean by adding !!

// create popover for user to upgrade

// action to redirect to tripe checkout 

// create api webhook for stripe to be able to process payment
// because stripe is going to call it.

// stripe webhooks to keep our sub script to run locally
// download stripe cli for windows to get our stripe webhook api secret
// add "/api/webhook" to our middleware

// billing page
// enable billing portal on stripe developer


// FINAL CHAPTER DEPLOY TO VERCEL
// add a post install script in package.json => "postinstall": "prisma generate"

// change app url and stripe secret only after deployment (from env)



