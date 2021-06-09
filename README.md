## Frozen app - Next js (Frontend)

How to run this application?

1. First, you need to create a Wordpress site as a headless CMS using a
   subdomain, example (frozen.richs.com)

2. When the setup is completed, delete all posts and pages by default.

3. Clone this repo and change values in .env file on HOST_NAME you need to put
   Wordpress domain example (frozen.richs.com) if using https add to HOST_URL to
   connect with Wordpress REST API

4. Now it is ready to build

5. you can use nginx to add ssl and run this app with docker (example on
   docker-compse-\* files)

6. When everything is ok, yo should see a page with Loading like below.

![Alt text](/screenshot.png?raw=true)
