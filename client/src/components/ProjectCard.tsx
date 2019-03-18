import React from 'react'
import { NavLink } from 'react-router-dom';

export const ProjectCard: React.FC = () => (
  <NavLink to="/project/:projectId" className="project">
    <h4>Title of project</h4>
    <p>Description of project details</p>
    <p>Created by <b>Author name</b></p>
  </NavLink>
)

