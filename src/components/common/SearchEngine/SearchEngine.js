import React, { useState } from 'react'
import { Search, MapPin, Filter, Briefcase, DollarSign, Clock } from 'lucide-react'
import { Input } from '../../../ui/input'
import { Button } from '../../../ui/button'
import { Select } from '../../../ui/select'
import { Slider } from "../../../ui/slider"
import { Checkbox } from '../../../ui/checkbox'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../ui/popover"

export default function SearchEngine() {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [salaryRange, setSalaryRange] = useState([0, 100000])

  const locations = ["Ho Chi Minh", "Ha Noi", "Da Nang", "Can Tho", "Other"]
  const jobTypes = ["Full-time", "Part-time", "Contract", "Internship", "Remote"]
  const experienceLevels = ["Entry Level", "1-2 years", "3-5 years", "5+ years"]
  const industries = ["Technology", "Finance", "Healthcare", "Education", "Other"]

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <div className="flex-grow">
          <Input
            type="text"
            placeholder="Nhập tên công việc hoặc từ khóa mong muốn"
            className="w-full"
            startIcon={<Search className="text-gray-400" />}
          />
        </div>
        <Select className="md:w-1/4">
          <option value="">Địa điểm</option>
          {locations.map((location) => (
            <option key={location} value={location}>{location}</option>
          ))}
        </Select>
        <Select className="md:w-1/4">
          <option value="">Ngành nghề</option>
          {industries.map((industry) => (
            <option key={industry} value={industry}>{industry}</option>
          ))}
        </Select>
        <Button className="w-full md:w-auto">
          Tìm kiếm
        </Button>
      </div>

      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className="text-primary"
        >
          <Filter className="w-4 h-4 mr-2" />
          Lọc nâng cao
        </Button>
        {showAdvancedFilters && (
          <Button variant="ghost" onClick={() => setShowAdvancedFilters(false)}>
            Đóng bộ lọc
          </Button>
        )}
      </div>

      {showAdvancedFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <DollarSign className="w-4 h-4 mr-2" />
                Mức lương: {salaryRange[0]} - {salaryRange[1]}k
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <Slider
                min={0}
                max={100000}
                step={1000}
                value={salaryRange}
                onValueChange={setSalaryRange}
              />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <Briefcase className="w-4 h-4 mr-2" />
                Hình thức làm việc
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              {jobTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={type} />
                  <label htmlFor={type}>{type}</label>
                </div>
              ))}
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <Clock className="w-4 h-4 mr-2" />
                Kinh nghiệm
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              {experienceLevels.map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <Checkbox id={level} />
                  <label htmlFor={level}>{level}</label>
                </div>
              ))}
            </PopoverContent>
          </Popover>
        </div>
      )}
    </div>
  )
}
