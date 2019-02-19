---
title: 'Grand Central'
type: 'Professional'
repo: ""
externalLink: 'http://jckb.com/projects#grandcentral'
imgPath: 
    - '../images/project-images/grand-central/grand-central1.jpg'
    - '../images/project-images/grand-central/grand-central2.jpg'
    - '../images/project-images/grand-central/grand-central3.jpg'
    - '../images/project-images/grand-central/grand-central4.jpg'
toolsUsed: ["PouchDB", "Reactjs", "Material-UI", "Leaflet"]
excerpt: 'PWA for RR crossing reporting'
---


Grand Central was created to solve the CPUC's problem of
railroad crossing safety reporting.

TLDR; A reporting app that even the most stubborn technicians will enjoy using.

The information on jckb.com, linked above, goes over many of the features of
the software, so this will be an overview of the role I played in development and the reasoning behind my decisions.

First, a backstory. California law requires all railroad crossing safety reports to be publicly accessible. This is a massive problem when dealing with written reports. They must be entered manually into a spreadsheet by the technician, which is then sent for manual review and manually entered into the database. Because reports are tied to the technician, any change in hiring or transfers wrecks havoc for looking at a single crossing’s history. Moving mile markers requires a 10-step process for EVERY MARKER. Multiply that by 200 and tears begin to form. An unholy number of hours are wasted with this system. The CPUC asked for solutions, and thus Grand Central was born. 

I was tasked with the design and development of the frontend, but also had input on the architecture of the whole system.

A big concern of mine was that many of our users would be reluctant. They were used to doing things a vastly different way, and understandably might not be thrilled about turning it all on its head. 

I remember using enterprise software in other jobs I have had, and how clunky and unintuitive they were. Important and commonly used functionalities would be buried under several menus, many inadequately named, while things I never touched sat on the root layer. 

With that in mind, I turned to K.I.S.S for the look and feel. I wanted it to be tactile and quickly internalized to second nature. Jobs are dished out in a controlled fashion, and displayed on the map for route-planning. Tap a job and you’re taken straight to the report. Add and remove report items from a searchable side bar and you’re on your way. Items are searchable and re-ordering is a snap. When you’re done, and have reviewed your report, a final “Submit” button confirms your report and flags it for manager review before automatically supplied to the public-facing API. 

PouchDB comes in here and allows us to sync automatically with the server. Coupled with service workers, we can reduce the confirmation step of the reporting to a single button. If the device is dropped in water, destroyed or the report otherwise lost before submission (but after syncing of course), all the tech has to do is login from another device and continue. 

Overall Grand Central is a huge improvement in terms of robustness, scalability, and ease of use. I’m proud to have played a part in its creation
