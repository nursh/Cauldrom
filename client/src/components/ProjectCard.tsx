import React from 'react'
import { NavLink } from 'react-router-dom';

export const ProjectCard: React.FC = () => (
  <NavLink to="/project/:projectId" className="project">
    <h4 className="project__title">Title of project</h4>
    <p className="project__description">Description of project details</p>
    <p className="project__author">Created by <b>Author name</b></p>
  </NavLink>
)

