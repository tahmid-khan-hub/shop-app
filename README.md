# ShopApp

**ShopApp** is a Next.js project where users can easily **browse products**, view **highlighted items** and check the **details of each product**.  
After logging in, users gain access to a **Dashboard** where they can add products. 

---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tahmid-khan-hub/shop-app.git
   cd shop-app
   
2. **Install dependencies**
   ```bash
   npm install
   
3. **Setup environment variables**
   Create a .env.local file and configure:
   ```bash
   NEXTAUTH_SECRET=your-secret-key
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

4. **Run the development server**
   ```bash
   npm run dev

5. **Open your browser and go to:**
   ```bash
   http://localhost:3000

---

## 📂 Route Summary
**Public Routes**
/ → Home (Hero, Services, Navbar, Footer)
/products → Browse all products
/products/[id] → Product details page
/highlight → Highlighted products
/login → Login page

**Protected Routes (After Login)**
/dashboard → Dashboard main page
/dashboard/addproduct → Add new product
/dashboard/allproducts → View all products
   
