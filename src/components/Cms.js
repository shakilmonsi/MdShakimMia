import React from 'react';
import { FaWordpressSimple, FaWix } from 'react-icons/fa';
import { GiGears } from 'react-icons/gi';
import { IoBuild } from 'react-icons/io5';
import { BsCart4 } from 'react-icons/bs';

const cmsSkills = [
  { name: 'WordPress', Icon: FaWordpressSimple, colorClass: 'text-primary' },
  { name: 'Wix', Icon: FaWix, colorClass: 'text-info' },
  { name: 'Crocoblock', Icon: GiGears, colorClass: 'text-warning' },
  { name: 'Elementor Pro', Icon: IoBuild, colorClass: 'text-danger' },
  { name: 'WooCommerce', Icon: BsCart4, colorClass: 'text-success' },
];

const Cms = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4 justify-content-center">
          {cmsSkills.map((skill, index) => (
            <div className="col" key={index}>
              <div className="skill-card-custom p-3 text-center rounded shadow-lg h-100 d-flex flex-column justify-content-between align-items-center">
                <div className="mb-2 icon-container-custom">
                  <skill.Icon size={70} className={`${skill.colorClass} icon-glow`} />
                </div>
                <p className="fw-bold mb-0 text-white skill-name-custom">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cms;
