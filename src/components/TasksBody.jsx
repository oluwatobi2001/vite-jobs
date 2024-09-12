import React, { useEffect, useState } from 'react';
import data from '../data/data.json';

// Import all SVGs from the images folder eagerly

// Create a map of image URLs

const ListBody = () => {
  const [filteredJobs, setFilteredJobs] = useState(data);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const FilterTheListing = () => {
      const filteredDets = data.filter((job) => {
        return filters.every((filt) => {
          return (
            job.role.includes(filt) ||
            job.languages.includes(filt) ||
            job.level.includes(filt) ||
            job.tools.includes(filt)
          );
        });
      });
      setFilteredJobs(filteredDets);
    };
    FilterTheListing();
  }, [filters]);

  const FilterAdd = (e) => {
    if (!filters.includes(e)) {
      setFilters((prevItems) => [...prevItems, e]);
    }
  };

  const FIlterRemove = (index) => {
    setFilters((prevFilters) => {
      const newFilter = [...prevFilters];
      newFilter.splice(index, 1);
      return newFilter;
    });
  };

  const RemoveAll = () => {
    setFilters([]);
  };

  return (
    <div className='relative flex flex-col w-full min-h-screen bg-LightGrayishCyanTb items-center justify-center mt-5 mx-auto'>
      {filters.length > 0 && (
        <div className='absolute -top-12 flex flex-row shadow-[0_0_22px_0_rgba(0,0,0,0.15)] w-[70%] lg:w-[80%] h-16 text-black bg-white rounded-lg mb-10'>
          <div className='flex flex-row w-full'>
            <div className='flex basis-3/4 items-center justify-center'>
              {filters.map((y, index) => (
                <div key={index} className='flex flex-row mx-2 flex-wrap items-center justify-center rounded-md bg-LightGrayishCyanTb'>
                  <p className='flex text-VeryDarkGrayishCyan h-6 w-[70%] p-1 font-medium'>{y}</p>
                  <p onClick={() => FIlterRemove(index)} className='flex rounded-md p-1 text-white font-medium h-6 w-[30%] items-center justify-center cursor-pointer bg-VeryDarkGrayishCyan'>
                    X
                  </p>
                </div>
              ))}
            </div>
            <div className='flex w-full justify-end p-2 items-center text-center basis-1/4'>
              <p onClick={() => RemoveAll()} className='font-bold cursor-pointer'>
                Clear
              </p>
            </div>
          </div>
        </div>
      )}

      {filteredJobs &&
        filteredJobs.map((info) => (
          <div key={info.id} className='flex flex-col w-[70%] md:w-[80%] mb-6 mt-[60px] shadow-[0_0_22px_0_rgba(0,0,0,0.15)] bg-white rounded-lg h-fit text-center'>
            <div className='flex w-full flex-col md:flex-row items-center'>
              <div className='relative flex w-full flex-col md:flex-row md:w-full'>
                <div className='w-10 h-10 absolute -top-5 ml-2 md:flex md:items-center md:relative md:my-auto md:mr-2 md:justify-center'>
                  <img src={info.logo} className='' alt={info.company} />
                </div>
                <div className='flex flex-col w-full justify-start ml-4 sm:justify-center mt-6 md:flex-col md:ml-2'>
                  <div className='flex flex-row mb-2'>
                    <p className='flex text-PrimaryDesaturatedDarkCyan mx-1 justify-start text-sm font-medium'>{info?.company}</p>
                    {info.new && <p className='flex bg-PrimaryDesaturatedDarkCyan justify-start text-sm rounded-md mx-1 px-1 text-white'>NEW!</p>}
                    {info.featured && <p className='flex bg-PrimaryDesaturatedDarkCyan text-sm rounded-md items-center mx-1 px-1 text-white'>FEATURED</p>}
                  </div>
                  <div className='flex flex-row mb-1'>
                    <p className='flex font-bold text-VeryDarkGrayishCyan'>{info.position}</p>
                  </div>
                  <div className='flex flex-row mb-3'>
                    <p className='pr-2 text-DarkGrayishCyan font-normal cursor-pointer'>{info.postedAt}</p>
                    <p className='pr-2 text-DarkGrayishCyan font-normal cursor-pointer'>{info.contract}</p>
                    <p className='pr-2 text-DarkGrayishCyan font-normal cursor-pointer'>{info.location}</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap mb-4 ml-3 md:justify-end md:w-full md:mr-3'>
                <p onClick={() => FilterAdd(info.role)} className='m-1 px-1 rounded-sm bg-LightGrayishCyanTb text-sm text-PrimaryDesaturatedDarkCyan font-semibold cursor-pointer'>
                  {info.role}
                </p>
                <p onClick={() => FilterAdd(info.level)} className='m-1 px-1 rounded-sm bg-LightGrayishCyanTb text-PrimaryDesaturatedDarkCyan font-semibold text-sm cursor-pointer'>
                  {info.level}
                </p>
                {info?.languages?.map((f) => (
                  <p key={f} onClick={() => FilterAdd(f)} className='m-1 rounded-sm px-1 bg-LightGrayishCyanTb text-PrimaryDesaturatedDarkCyan font-semibold text-sm cursor-pointer'>
                    {f}
                  </p>
                ))}
                {info?.tools?.map((f) => (
                  <p key={f} onClick={() => FilterAdd(f)} className='m-1 rounded-sm px-1 bg-LightGrayishCyanTb text-PrimaryDesaturatedDarkCyan font-semibold text-sm cursor-pointer'>
                    {f}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListBody;
