import React, { useState } from 'react';
import { FileText, Database, Code, Rocket, GitBranch, Package } from 'lucide-react';

const ProjectGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'structure', label: 'Project Structure', icon: GitBranch },
    { id: 'setup', label: 'Setup Guide', icon: Code },
    { id: 'deployment', label: 'Deployment', icon: Rocket },
    { id: 'testing', label: 'Testing', icon: Database }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Package size={48} />
              <h1 className="text-4xl font-bold">Product Catalog Manager</h1>
            </div>
            <p className="text-purple-100 text-lg">Django REST API with CRUD Operations & Data Visualization</p>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="flex overflow-x-auto">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 font-medium transition-all ${
                      activeTab === tab.id
                        ? 'border-b-2 border-purple-600 text-purple-600 bg-white'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={18} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
                    <p className="text-gray-700">
                      A product-management backend built in Django that supports full CRUD operations via REST APIs, 
                      integrates with an external API to fetch sample product content, and provides a visual dashboard 
                      for activity insights.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">✓ Product CRUD Operations</h4>
                      <p className="text-sm text-gray-700">Complete REST APIs for managing product catalog</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">✓ External API Integration</h4>
                      <p className="text-sm text-gray-700">Fetch product data from FakeStore API</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">✓ Activity Dashboard</h4>
                      <p className="text-sm text-gray-700">Visualize products added daily with charts</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 mb-2">✓ PostgreSQL Database</h4>
                      <p className="text-sm text-gray-700">Supabase integration for data persistence</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Tech Stack</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Backend:</strong> Django 5.0, Django REST Framework</li>
                      <li><strong>Database:</strong> PostgreSQL (Supabase)</li>
                      <li><strong>API Integration:</strong> FakeStore API (sample products)</li>
                      <li><strong>Visualization:</strong> Chart.js for dashboard</li>
                      <li><strong>Deployment:</strong> Railway / Render / Heroku</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">API Endpoints</h3>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="bg-gray-800 text-green-400 p-3 rounded">GET /api/products/ - List all products</div>
                    <div className="bg-gray-800 text-blue-400 p-3 rounded">POST /api/products/ - Create new product</div>
                    <div className="bg-gray-800 text-yellow-400 p-3 rounded">PUT /api/products/&lt;id&gt;/ - Update product</div>
                    <div className="bg-gray-800 text-red-400 p-3 rounded">DELETE /api/products/&lt;id&gt;/ - Delete product</div>
                    <div className="bg-gray-800 text-purple-400 p-3 rounded">GET /api/products/import/ - Import from API</div>
                    <div className="bg-gray-800 text-pink-400 p-3 rounded">GET /api/dashboard/ - View analytics dashboard</div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Database Schema</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Product Model</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>name:</strong> Product name (CharField)</li>
                      <li>• <strong>description:</strong> Detailed description (TextField)</li>
                      <li>• <strong>price:</strong> Product price (DecimalField)</li>
                      <li>• <strong>category:</strong> Product category (CharField)</li>
                      <li>• <strong>stock_quantity:</strong> Available stock (IntegerField)</li>
                      <li>• <strong>image_url:</strong> Product image URL (URLField)</li>
                      <li>• <strong>created_at:</strong> Creation timestamp</li>
                      <li>• <strong>updated_at:</strong> Last update timestamp</li>
                    </ul>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'structure' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Structure</h2>
                <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto font-mono text-sm">
                  <pre>{`product_catalog/
├── manage.py
├── requirements.txt
├── README.md
├── .env
├── .gitignore
├── Procfile
├── runtime.txt
├── catalog_project/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── products/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   ├── services.py
│   ├── tests.py
│   └── migrations/
└── templates/
    └── dashboard.html`}</pre>
                </div>
              </div>
            )}

            {activeTab === 'setup' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Setup Instructions</h2>
                
                <div className="space-y-4">
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">Prerequisites</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Python 3.9+</li>
                      <li>• pip (Python package manager)</li>
                      <li>• Git</li>
                      <li>• PostgreSQL or Supabase account</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 1: Clone Repository</h3>
                    <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
                      git clone https://github.com/yourusername/product-catalog.git<br/>
                      cd product-catalog
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 2: Create Virtual Environment</h3>
                    <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
                      python -m venv venv<br/>
                      source venv/bin/activate  # On Windows: venv\Scripts\activate
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 3: Install Dependencies</h3>
                    <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
                      pip install -r requirements.txt
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 4: Configure Environment Variables</h3>
                    <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
                      <pre>{`# Create .env file with:
DATABASE_URL=postgresql://user:pass@host:5432/dbname
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1`}</pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 5: Run Migrations</h3>
                    <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
                      python manage.py makemigrations<br/>
                      python manage.py migrate
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 6: Create Superuser</h3>
                    <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
                      python manage.py createsuperuser
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 7: Run Development Server</h3>
                    <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
                      python manage.py runserver
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Visit http://localhost:8000/api/ to access the API</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'deployment' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Deployment Guide</h2>
                
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
                  <h3 className="font-semibold text-purple-900 mb-2">Recommended Platforms</h3>
                  <p className="text-sm text-gray-700">Railway, Render, or Heroku for easy Django deployment</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Railway Deployment</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li>1. Create account at railway.app</li>
                    <li>2. Click "New Project" → "Deploy from GitHub"</li>
                    <li>3. Select your repository</li>
                    <li>4. Add PostgreSQL database service</li>
                    <li>5. Add environment variables in settings</li>
                    <li>6. Railway auto-detects Django and deploys</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Render Deployment</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li>1. Create account at render.com</li>
                    <li>2. Create new Web Service</li>
                    <li>3. Connect GitHub repository</li>
                    <li>4. Build command: pip install -r requirements.txt</li>
                    <li>5. Start command: gunicorn catalog_project.wsgi</li>
                    <li>6. Add PostgreSQL database</li>
                    <li>7. Configure environment variables</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Environment Variables</h3>
                  <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
                    <pre>{`DATABASE_URL=<postgres-connection-url>
SECRET_KEY=<generated-secret-key>
DEBUG=False
ALLOWED_HOSTS=your-domain.com`}</pre>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h3 className="font-semibold text-green-900 mb-2">Post-Deployment</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Run migrations on production</li>
                    <li>✓ Collect static files</li>
                    <li>✓ Test all API endpoints</li>
                    <li>✓ Import sample products</li>
                    <li>✓ Verify dashboard</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'testing' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Testing Guide</h2>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Run Unit Tests</h3>
                  <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
                    python manage.py test
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Test API with cURL</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Create Product:</p>
                      <div className="bg-gray-900 text-white p-3 rounded font-mono text-xs overflow-x-auto">
                        curl -X POST http://localhost:8000/api/products/ \<br/>
                        &nbsp;&nbsp;-H "Content-Type: application/json" \<br/>
                        &nbsp;&nbsp;-d '{"{"}name":"Laptop","description":"Gaming laptop","price":999.99,"category":"Electronics","stock_quantity":50{"}"}'
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Get All Products:</p>
                      <div className="bg-gray-900 text-white p-3 rounded font-mono text-xs">
                        curl http://localhost:8000/api/products/
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Import Products from API:</p>
                      <div className="bg-gray-900 text-white p-3 rounded font-mono text-xs">
                        curl -X POST http://localhost:8000/api/products/import/
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Update Product:</p>
                      <div className="bg-gray-900 text-white p-3 rounded font-mono text-xs">
                        curl -X PUT http://localhost:8000/api/products/1/ \<br/>
                        &nbsp;&nbsp;-H "Content-Type: application/json" \<br/>
                        &nbsp;&nbsp;-d '{"{"}price":899.99{"}"}'
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Delete Product:</p>
                      <div className="bg-gray-900 text-white p-3 rounded font-mono text-xs">
                        curl -X DELETE http://localhost:8000/api/products/1/
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Access Dashboard</h3>
                  <div className="bg-indigo-50 p-4 rounded">
                    <p className="text-sm text-gray-700 mb-2">
                      Visit <span className="font-mono bg-white px-2 py-1 rounded">http://localhost:8000/api/dashboard/</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      View analytics showing products added per day, category distribution, and inventory status.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 border-t border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Ready for production deployment with complete documentation
              </div>
              <div className="flex gap-3">
                <a href="#" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                  View on GitHub
                </a>
                <a href="#" className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGuide;