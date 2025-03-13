# Find Jobs Readme

This webpage is made for Transviti as a part of frontend coding challenge. The focus on this project was design and responsiveness. I have not used any library except for Tailwind CSS. All components are handmade through Tailwind CSS. I've added comments for readability and reusability. I have setup custom Tailwind theme that includes the font sizes, colors and font weight suited for this project. I will discuss those custom classes in later section.

## Scripts to run the project locally
- npm i
- npm run dev

## Stack used for the project

### Vite 
Vite has always been my go to solution for vanilla React Projects because it has always been faster than now deprecated CRA or create-react-app
### React 19
React has always been my go to for personal projects because of its No-frills modular design. For Project such as this, it is redundant to use a Framework like Next.js or Remix
### Tailwind CSS
Tailwind CSS is a utility based CSS framework. Unlike Bootstrap which do make it easy to make quick layouts. It can be cumbersome to customize it or override it with CSS. Tailwind is basically just CSS and much faster. It saves me the trouble of naming CSS classes, setting up media queries or just writing lines of code just to setup a Flexbox.

## Tailwind CSS custom classes
The custom classes are added as variable in index.css. The file also contains CSS Reset which helps override any browser's default margins, box-sizing etc.
Here is a list of all the custom classes that has been added along with their respective CSS values:
### Font Weight
- font-bold : 600
### Font Sizes
- text-2xs : 10px
- text-xl : 22px
### Colors 
[x] denotes the class the color is used for such as text or bg. For example [x]-primary can be bg-primary etc.
- [x]-primary : #0154AA
- [x]-icon-gray : #AAAAAA
- [x]-light : #737A91
- [x]-color-base : #585D6E
- [x]-dark : #333333
- [x]-bg-blue : #F6F9FF
- [x]-separator : #E9ECEF


## Devices tested on
For the sake of responsiveness. I tested the page on multiple devices including:
- A PC with a 2K 27-inch monitor
- An old laptop with a 17-inch screen.
- 2 different brands of Xiaomi phones.
