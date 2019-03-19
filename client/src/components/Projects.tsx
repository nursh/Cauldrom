import React, { Component } from 'react'
import { ProjectCard } from './ProjectCard';
import { MainHeader } from './Header';

export class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <MainHeader />
        <nav>
          <ul className="projects__tabs">
            <li className="projects__tabs__item projects__tabs__item--active">All Projects</li>
            <li className="projects__tabs__item">My Projects</li>
          </ul>
        </nav>
        <div className="projects__list">
         {
           [1, 2, 3, 4].map(n => {
             return <ProjectCard key={n} />;
           })
         }
        </div>

      </div>
    )
  }
}
