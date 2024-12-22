import React, { useEffect, useState, useRef } from "react";
import Headings from "./Headings";

const Courses = ({ coursesLine, coursesDescription }) => {
  const mediaLinks = [
    { 
      link: "https://cdn.sanity.io/images/3vte03iz/production/fbb0371fff2c02e252b267cbd7cb864ff9d792ee-3101x3105.png?auto=format&w=300&h=300",
      title: "Course Title 1"
    },
    { 
      link: "https://cdn.sanity.io/images/3vte03iz/production/6bcc343dca040f2a86fe84a1bd112a9fadd16078-3238x3238.png?auto=format&w=300&h=300", 
      title: "Course Title 2"
    },
    { 
      link: "https://giphy.com/embed/d3F3FQa5NgjCg", 
      title: "Course Title 3"
    },
    { 
      link: "https://cdn.sanity.io/images/3vte03iz/production/0045c4a002b1545841387859bc3819f140227548-2559x2559.gif?auto=format&w=600&h=600",
      title: "Course Title 4"
    },
    { 
      link: "https://cdn.sanity.io/images/3vte03iz/production/f52e1a998c6e4b34773ef48ea18f8c9b8472efbc-2989x2989.png?auto=format&w=300&h=300",
      title: "Course Title 5"
    },
    { 
      link: "https://cdn.sanity.io/images/3vte03iz/production/b2a1e3e396f2921ea5c5c1f33edad7d141bbed98-2048x2048.gif?auto=format&w=300&h=300",
      title: "Course Title 6"
    },
    { 
      link: "https://cdn.sanity.io/images/3vte03iz/production/240e7a3db6d4ad80f0569bf435e8500f81adfdf7-2500x2500.gif?auto=format&w=300&h=300",
      title: "Course Title 7"
    },
    { 
      link: "https://cdn.sanity.io/images/3vte03iz/production/3934c5000d7d4a36a249cd915464ead82672804b-2381x2381.jpg?auto=format&w=500&h=500",
      title: "Course Title 8"
    },
    { 
      link: "https://cdn.sanity.io/images/3vte03iz/production/0817f128395483277291c832105c1b0a35bbf6a0-2048x2048.jpg?auto=format&w=600&h=600",
      title: "Course Title 9"
    },
    { 
      link: "https://cdn.sanity.io/images/3vte03iz/production/fbb0371fff2c02e252b267cbd7cb864ff9d792ee-3101x3105.png?auto=format&w=300&h=300",
      title: "Course Title 10"
    },
    { 
      link: "https://cdn.sanity.io/images/3vte03iz/production/6bcc343dca040f2a86fe84a1bd112a9fadd16078-3238x3238.png?auto=format&w=300&h=300",
      title: "Course Title 11"
    },
    { 
      link: "https://cdn.sanity.io/images/3vte03iz/production/6bcc343dca040f2a86fe84a1bd112a9fadd16078-3238x3238.png?auto=format&w=300&h=300",
      title: "Course Title 12"
    },
    { 
      link: "https://giphy.com/embed/d3F3FQa5NgjCg", 
      title: "Course Title 13"
    },
    { 
      link: "https://cdn.sanity.io/images/3vte03iz/production/0045c4a002b1545841387859bc3819f140227548-2559x2559.gif?auto=format&w=600&h=600",
      title: "Course Title 14"
    },
    { 
      link: "https://cdn.sanity.io/images/3vte03iz/production/f52e1a998c6e4b34773ef48ea18f8c9b8472efbc-2989x2989.png?auto=format&w=300&h=300",
      title: "Course Title 15"
    },
    { 
      link: "https://cdn.sanity.io/images/3vte03iz/production/b2a1e3e396f2921ea5c5c1f33edad7d141bbed98-2048x2048.gif?auto=format&w=300&h=300",
      title: "Course Title 16"
    },
    { 
      link: "https://cdn.sanity.io/images/3vte03iz/production/240e7a3db6d4ad80f0569bf435e8500f81adfdf7-2500x2500.gif?auto=format&w=300&h=300",
      title: "Course Title 17"
    },
    { 
      link: "https://cdn.sanity.io/images/3vte03iz/production/3934c5000d7d4a36a249cd915464ead82672804b-2381x2381.jpg?auto=format&w=500&h=500",
      title: "Course Title 18"
    },
    { 
      link: "https://cdn.sanity.io/images/3vte03iz/production/0817f128395483277291c832105c1b0a35bbf6a0-2048x2048.jpg?auto=format&w=600&h=600",
      title: "Course Title 19"
    }
  ];

  const [visibleRows, setVisibleRows] = useState([]);
  const rowsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          if (entry.isIntersecting) {
            setVisibleRows((prev) => [...prev, index]);
          } else {
            setVisibleRows((prev) => prev.filter((row) => row !== index));
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    rowsRef.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => {
      rowsRef.current.forEach((row) => {
        if (row) observer.unobserve(row);
      });
    };
  }, []);

  const renderMedia = (link, index) => {
    if (link.includes("giphy") || link.includes("vimeo")) {
      return (
        <iframe
          src={link}
          title={`Media ${index}`}
          frameBorder="0"
          allowFullScreen
          className="w-full h-full rounded-lg"
        ></iframe>
      );
    }

    return (
      <img
        src={link}
        alt={`Media ${index}`}
        className="w-full h-full object-cover rounded-lg"
      />
    );
  };

  return (
    <div className="overflow-y-hidden w-[100vw]  mt-[10vh] xl:mt-[10vh] md:mt-[10vh] lg:mt-[10vh] ">
      <Headings className="" featuredLine={coursesLine} description={coursesDescription} />
      <div className=" grid grid-cols-2 md:grid-cols-2 lg:gird-cols-3 xl:grid-cols-3 lg:gap-20 md:gap-20 xl:gap-20 gap-15 mt-4 ">
        {mediaLinks.map((media, index) => (
          <div
            key={index}
            ref={(el) => (rowsRef.current[index] = el)}
            data-index={index}
            className={`relative w-[35vw] lg:w-[18vw] mt-[10vh] transition-transform duration-300 rounded-lg ml-4 hover:scale-105 ${
              visibleRows.includes(String(index)) ? "scale-110" : "scale-100"
            }`}
          >
            {renderMedia(media.link, index)}
            <h3 className="text-center mt-2 text-lg font-semibold">
              {media.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
