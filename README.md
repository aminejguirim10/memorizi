# 🤖 Memorizi website

Welcome to Memorizi, your personal haven for securely storing and cherishing your precious memories. Memorizi is a user-friendly website designed to provide you with a safe and intuitive platform for preserving your images. Whether it's your favorite family photos, unforgettable travel moments, or daily snapshots, Memorizi ensures that your memories are kept safe and easily accessible whenever you need them. Join us in creating a digital scrapbook of your life, where every moment is treasured and protected.

## 🔋 Features

👉 **User Authentication:** Secure sign-up, login, and logout functionalities.

👉 **Image Upload:** Easily upload and store your images.

👉 **Image Management:** Delete and organize your images effortlessly.

👉 **Image Sharing:** Copy image links for easy sharing between users.

👉 **Secure Storage:** Ensure your memories are safely stored and protected.

👉 **User Dashboard:** Manage your image collection with a user-friendly interface.

👉 **Responsive Design:** Enjoy an optimal user experience across all devices, whether you're on a desktop, tablet, or smartphone.

## ⚙️ Technologies Used

- **Frontend:** [Nextjs](https://nextjs.org/) , [TailwindCSS](https://tailwindcss.com/) , [TypeScript](https://www.typescriptlang.org/)
- **Backend:** Next.js API Routes and Server actions
- **Database:** [MongoD](https://www.mongodb.com/) with [Prisma](https://www.prisma.io/)
- **Authentication:** [NextAuth](https://next-auth.js.org/)

## 🖥️ Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## 🚀 Installation

1. Clone the repository:

```bash
 git clone https://github.com/aminejguirim10/memorizi.git
```

2. Navigate to the project directory:

```bash
 cd memorizi
```

3. Install the dependencies:

```bash
npm install
```

4. Configure environment variables:

Create a new file named .env in the root of your project and add the following content:

```bash
DATABASE_URL="your_mongodb_url"
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="your_nextauth_url"

GOOGLE_CLIENT_SECRET="your_google_client_secret"
GOOGLE_CLIENT_ID="your_google_client_id"
GITHUB_SECRET="your_github_secret"
GITHUB_ID="your_github_id"

UPLOADTHING_SECRET="your_uploadthing_secret"
UPLOADTHING_APP_ID="your_uploadthing_app_id"

NODE_MAILER_SECRET="your_node_mailer_secret"
NODE_MAILER_AUTHOR_MAIL="your_node_mailer_author_mail"

JWT_SECRET="your_jwt_secret"
```

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and visit:

```bash
http://localhost:3000
```

## 📷 Image Storage with UploadThing

This project uses UploadThing for image storage. Make sure you have configured the appropriate environment variables for UploadThing.

## 🚶 Contributing

Contributions are welcome! Please open an issue or submit a pull request.
