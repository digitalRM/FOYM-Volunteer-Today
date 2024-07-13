![Volunteer Today)](https://github.com/user-attachments/assets/bd282059-9076-49aa-a7ee-3425b7bdf926)

Template Series - Volunteer Today #4
---
This is a template for organizations modeled after a made-up volunteering nonprofit called “Volunteer Today.” It is entirely free to use and customize. Created by FOYM, a project by Ruslan Mukhamedvaleev, under the MIT license.

![Website Image](https://github.com/user-attachments/assets/a9255895-d9fc-4477-9cf7-0deffa9468b6)

This is the fourth fully open-source template we have created. This is a template for organizations modeled after a made-up volunteering nonprofit called “Volunteer Today.” It features a bento hero section, a double stacked informational section, and a call-to-action card. - Ruslan

Getting Started
---

To get a local copy up and running, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/en)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- An IDE

### Installation

Clone the repository

```bash
git clone https://github.com/digitalRM/FOYM-Volunteer-Today.git
```

Install required packages

```bash
npm install
```

Customize the entire website across all the sections inside the `components/sections` folder
```js
1 - Hero.jsx
2 - InfoSection.jsx
3 - CallToAction.jsx
4 - Footer.jsx
```

There are also important files to edit in the `components/ui` folder. They are all marked with 1 in the front. 
```js
1 - contact-dialog.jsx
1 - header.jsx
1 - mobile-drawer.jsx
```

Delete Banner in `app/layout.js`

```js
// Delete this import below when you are ready to remove the banner
import Banner from "@/components/sections/999 - banner";

{/* This is the banner for the FOYM website. Feel free to delete this! */}
<Banner />
```
Delete Banner from the `components/sections` folder
```js
999 - banner.jsx
```

Customize your metadata in `app/layout.js`
```js
// This is the metadata for the website. Change the values to match your website. Upload the openGraph.png to your public folder
export const metadata = {
  metadataBase: new URL('https://www.foym.org/'),
  title: "Volunteer Today - An FOYM Template",
  description: "This is a template for organizations modeled after a made-up volunteering nonprofit called “Volunteer Today.” Created by FOYM, a project by Ruslan Mukhamedvaleev, under the MIT license.",
  openGraph: {
    title: "Volunteer Today - An FOYM Template",
    description: "",
    url: 'This is a template for organizations modeled after a made-up volunteering nonprofit called “Volunteer Today.” Created by FOYM, a project by Ruslan Mukhamedvaleev, under the MIT license.',
    siteName: 'Volunteer Today - An FOYM Template',
    images: [
      {
        url: '/openGraph.png',
        width: 1600,
        height: 900,
        alt: 'An image of the website\s name "Volunteer Today - An FOYM. Template" and star like characters in the background pointing at the name',
      },
    ], 
    locale: 'en_US',
    type: 'website',
  },
}
```

Run the development server

```bash
npm run dev
```

## Contact 

If you are having trouble setting this up, please feel free to contact me via the [foym](https://www.foym.org) website. 

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.


