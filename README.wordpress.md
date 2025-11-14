# WordPress (Headless) via Docker

## Quick start

1. Start WordPress + MySQL (Docker required):

   ```bash
   docker compose up -d
   ```

2. Open WordPress admin:

   `http://localhost:8080/wp-admin`

   - Complete the install wizard
   - Create your admin user
   - (Optional) Add posts and a featured image

3. Configure the Next.js app env:

   Create `.env.local` in the project root:

   ```env
   NEXT_PUBLIC_WP_URL=http://localhost:8080
   ```

4. Run the Next.js app:

   ```bash
   npm run dev
   ```

   Blog cards will load from `WP REST API: /wp-json/wp/v2/posts?_embed`.

## Notes
- If images do not appear, ensure posts have a Featured Image.
- To change ports, edit `docker-compose.yml` and `NEXT_PUBLIC_WP_URL`.



