import "./index.css"
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import HomePage from './components/HomePage'
import CaseStudyPage from './components/CaseStudy'
import { projectsData } from './data'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {projectsData.map((project) => (
          <Route
            key={project.id}
            path={`/project/${project.id}`}
            element={<CaseStudyPage project={project} />}
          />
        ))}
      </Routes>
    </App>
  </BrowserRouter>
)