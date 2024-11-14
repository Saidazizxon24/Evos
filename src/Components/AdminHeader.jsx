

function AdminHeader() {
    return (
      <header className="bg-gray-800 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-semibold">Admin Panel</h1>
          <nav className="flex space-x-4">
            <a href="/admin/dashboard" className="hover:text-gray-400">Dashboard</a>
            <a href="/admin/products" className="hover:text-gray-400">Products</a>
            <a href="/admin/settings" className="hover:text-gray-400">Settings</a>
            <a href="/main" className="hover:text-red-500">Logout</a>
          </nav>
        </div>
      </header>
    );
  }
  
  export default AdminHeader;
  
  