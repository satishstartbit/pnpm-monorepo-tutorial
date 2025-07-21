import Image from 'next/image';
const Hero = ({ title, subtitle, backgroundImage, price, searchForm = true, variant = 'default' }) => {
    const variantStyles = {
        default: 'text-blue-600',
        luxury: 'text-yellow-600',
        adventure: 'text-green-600',
        family: 'text-pink-600',
    };
    return (<section className='relative pt-24 bg-white dark:bg-gray-900 bg-cover text-white'>
      <div className='container mx-auto max-w-7xl lg:px-0 px-4 relative z-10'>
        <div className="bg-no-repeat bg-cover sm:p-24 p-10 px-4 bg-center rounded-3xl grid grid-cols-12" style={{ backgroundImage: `url('${backgroundImage}')` }}>
          <div className='2xl:col-span-8 lg:col-span-6 col-span-12'>
            <div className='flex flex-col h-full justify-end'>
              <h1 data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000' className='text-white sm:text-[70px] sm:leading-[4.75rem] xl:text-[100px] xl:leading-[6.37rem] text-[58px] leading-[5.3rem] font-bold lg:text-left text-center sm:mb-8'>
                {title}<span className={`${variantStyles[variant]}`}>.</span>
              </h1>
              
              {subtitle && (<p data-aos='fade-up' data-aos-delay='250' data-aos-duration='1000' className='text-white text-xl lg:text-left text-center mb-8'>
                  {subtitle}
                </p>)}

              {price && (<div className='flex lg:justify-start justify-center gap-4' data-aos='fade-up' data-aos-delay='300' data-aos-duration='1000'>
                  <div className='flex flex-col justify-end'>
                    <Image src='/images/hero/flight-Hotel.svg' alt='Flight and Hotel' width={80} height={30}/>
                    <p data-aos='fade-up' data-aos-delay='400' data-aos-duration='1000' className='text-white font-medium text-lg'>
                      {price.duration}
                    </p>
                  </div>
                  <p data-aos='fade-up' data-aos-delay='500' data-aos-duration='1000' className='sm:text-[50px] sm:leading-[4.3rem] text-[40px] leading-[3rem] font-bold'>
                    {price.currency}{price.amount}
                  </p>
                </div>)}
            </div>
          </div>
          
          {searchForm && (<div className='2xl:col-span-4 lg:col-span-6 col-span-12 lg:mt-0 mt-8'>
              <div className='bg-white dark:bg-darklight rounded-3xl p-8' data-aos='fade-left' data-aos-delay='200' data-aos-duration='1000'>
                <h4 className='text-midnight_text text-2xl font-bold dark:text-white'>
                  Plan your Vacation
                </h4>
                <form>
                  <div className='py-4 border-b border-border dark:border-dark_border'>
                    <label htmlFor='destination' className='text-grey text-base font-normal'>
                      Destination*
                    </label>
                    <select id='destination' className='focus:outline-hidden w-full text-midnight_text dark:text-white text-xl font-medium dark:bg-darklight'>
                      <option value=''>Select Destination</option>
                      <option value='reykjavik'>Reykjavík, Iceland</option>
                      <option value='vancouver'>Vancouver, Canada</option>
                      <option value='kyoto'>Kyoto, Japan</option>
                      <option value='lisbon'>Lisbon, Portugal</option>
                      <option value='barcelona'>Barcelona, Spain</option>
                    </select>
                  </div>
                  <div className='py-4 border-b border-border dark:border-dark_border'>
                    <label htmlFor='mood' className='text-grey text-base font-normal'>
                      Vacation Mood*
                    </label>
                    <select id='mood' className='focus:outline-hidden w-full text-midnight_text dark:text-white text-xl font-medium dark:bg-darklight'>
                      <option value=''>Select Mood</option>
                      <option value='hiking'>Hiking Adventure</option>
                      <option value='relaxed'>Relaxed and Chill</option>
                      <option value='cultural'>Cultural Immersion</option>
                      <option value='luxury'>Luxury and Pampering</option>
                      <option value='solo'>Solo Serenity</option>
                    </select>
                  </div>
                  <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 py-4'>
                    <div className='flex flex-col'>
                      <label htmlFor='date' className='text-grey text-base font-normal'>
                        Date*
                      </label>
                      <input type='date' name='date' id='date' className='text-midnight_text text-lg font-medium dark:text-white dark:bg-darklight focus:outline-0 w-full border border-transparent'/>
                    </div>
                    <div className='flex flex-col'>
                      <label htmlFor='passengers' className='text-grey text-base font-normal'>
                        Passengers*
                      </label>
                      <input type='number' name='passengers' id='passengers' className='text-midnight_text dark:bg-darklight dark:text-white text-lg font-medium focus:outline-0 w-full border border-transparent' placeholder='0' min='1'/>
                    </div>
                  </div>
                  <button type='submit' className={`py-4 hover:opacity-90 text-white text-base font-medium w-full rounded-lg transition-all duration-300 ${variant === 'luxury' ? 'bg-yellow-600' :
                variant === 'adventure' ? 'bg-green-600' :
                    variant === 'family' ? 'bg-pink-600' :
                        'bg-blue-600'}`}>
                    Search Now
                  </button>
                </form>
              </div>
            </div>)}
        </div>
      </div>
    </section>);
};
export default Hero;
