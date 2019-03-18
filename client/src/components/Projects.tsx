import React, { Component } from 'react'
import { ProjectCard } from './ProjectCard';
import { MainHeader } from './Header';

export class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <MainHeader />

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
