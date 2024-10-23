import React from 'react'
import JobCard from "../JobCard/JobCard"
import logo1 from '../../../assets/images/common/logo1.jpg'
export default function JobList() {
  const jobs = [
    {
      jobTitle: 'Product Designer',
      company: 'ABC Corp',
      location: 'TP. Hồ Chí Minh',
      categories: ['Thiết kế', 'UI/UX'],
      jobType: 'Full Time',
      companyLogo: logo1,
    },
    {
        jobTitle: 'Product Designer',
        company: 'ABC Corppppppppppppppppppppppppppppppppppppppppppppppppp',
        location: 'Đà Nẵng',
        categories: ['Thiết kế', 'UI/UX'],
        jobType: 'Full Time',
        companyLogo: logo1,
      },
      {
        jobTitle: 'Product Designer',
        company: 'ABC Corp',
        location: 'TP. Hồ Chí Minh',
        categories: ['Thiết kế', 'UI/UX'],
        jobType: 'Full Time',
        companyLogo: logo1,
      },
      {
        jobTitle: 'Product Designer',
        company: 'ABC Corp',
        location: 'TP. Hồ Chí Minh',
        categories: ['Thiết kế', 'UI/UX'],
        jobType: 'Full Time',
        companyLogo: logo1,
      },
      {
        jobTitle: 'Product Designer',
        company: 'ABC Corp',
        location: 'TP. Hồ Chí Minh',
        categories: ['Thiết kế', 'UI/UX'],
        jobType: 'Full Time',
        companyLogo: logo1,
      },
      {
        jobTitle: 'Product Designer',
        company: 'ABC Corp',
        location: 'TP. Hồ Chí Minh',
        categories: ['Thiết kế', 'Marketing'],
        jobType: 'Full Time',
        companyLogo: logo1,
      },
      {
        jobTitle: 'Product Designer',
        company: 'ABC Corp',
        location: 'TP. Hồ Chí Minh',
        categories: ['Thiết kế', 'Kinh doanh'],
        jobType: 'Full Time',
        companyLogo: logo1,
      },
      {
        jobTitle: 'Product Designer',
        company: 'ABC Corp',
        location: 'TP. Hồ Chí Minh',
        categories: ['Thiết kế', 'Công nghệ'],
        jobType: 'Full Time',
        companyLogo:logo1,
      },
      
    
  ]

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Các công việc nổi bật</h2>
        <a href="#" className="text-primary">
          Xem tất cả
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            jobTitle={job.jobTitle}
            company={job.company}
            location={job.location}
            categories={job.categories}
            jobType={job.jobType}
            companyLogo={job.companyLogo}
          />
        ))}
      </div>
    </section>
  )
}
