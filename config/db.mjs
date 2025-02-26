import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Agency from '../models/agencySchema.mjs';
dotenv.config();

const connectionString = process.env.mongoURI || '';

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString);

    console.log(`Mongo DB Connected...`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
      initialData.sort((a, b) => {
          // Handle "N/A" dates
          if (a.date === "N/A") return 1;
          if (b.date === "N/A") return -1;
      
          // Convert date strings to Date objects for comparison
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
      
          // Sort in descending order
          return dateB - dateA;
      });
  
      try {
          // Clear existing data
          await Agency.deleteMany({});
          console.log('Existing data cleared');
  
          // Insert initial data
          await Agency.insertMany(initialData);
          console.log('Initial data inserted successfully');
      } catch (error) {
          console.error('Error initializing database:', error);
          mongoose.connection.close();
      }
  }

const initialData = [
    {
      "agency": "NIH",
      "date": "2025-02-15",
      "fired": "1165",
      "rehired": "0",
      "total_employees": 20570,
      "summary": "The National Institutes of Health (NIH) laid off approximately 1,165 employees, constituting about 5.7% of its workforce, as part of a broader federal workforce reduction initiative.",
      "source": ["https://www.reuters.com/world/us/trump-administration-lays-off-fda-employees-stat-news-reports-2025-02-16/"]
    },
    {
      "agency": "CDC",
      "date": "2025-02-14",
      "fired": "1300",
      "rehired": "0",
      "total_employees": 13000,
      "summary": "The Centers for Disease Control and Prevention (CDC) terminated approximately 1,300 probationary employees, representing about 10% of its workforce, as part of federal workforce reduction efforts.",
      "source": ["https://www.reuters.com/business/healthcare-pharmaceuticals/cdc-lose-one-tenth-workforce-under-trump-administration-probationary-job-cuts-ap-2025-02-14/"]
    },
    {
      "agency": "FDA",
      "date": "2025-02-16",
      "fired": "700",
      "rehired": "220",
      "total_employees": 17000,
      "summary": "The Food and Drug Administration (FDA) initially laid off approximately 700 employees, including 220 from the medical device center. Following industry backlash, the FDA reinstated the 220 medical device staffers.",
      "source": ["https://apnews.com/article/85d4743e4ce88dbe3b99c813bad4b702"]
    },
    {
      "agency": "HHS",
      "date": "2025-02-13",
      "fired": "5200",
      "rehired": "0",
      "total_employees": 80000,
      "summary": "The Department of Health and Human Services (HHS) laid off approximately 5,200 probationary employees as part of a federal workforce reduction directive.",
      "source": ["https://www.nytimes.com/2025/02/13/us/politics/trump-layoffs-probationary-workers.html"]
    },
    {
      "agency": "EPA",
      "date": "2025-02-14",
      "fired": "559",
      "rehired": "0",
      "total_employees": 14000,
      "summary": "The Environmental Protection Agency (EPA) terminated 559 employees, impacting various environmental programs and services.",
      "source": ["https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html"]
    },
    {
        "agency": "FTC",
        "date": "N/A",
        "fired": "0",
        "rehired": "0",
        "total_employees": 1100,
        "summary": "No reported changes.",
        "source": ["https://www.ftc.gov/news-events/press-releases/2025/02/ftc-announces-upcoming-initiatives"]
      },
      {
        "agency": "DOD",
        "date": "2025-02-25",
        "fired": "5400",
        "rehired": "0",
        "total_employees": 700000,
        "summary": "The Department of Defense (DOD) announced plans to lay off approximately 5,400 probationary employees, constituting about 0.77% of its civilian workforce, as part of a broader effort to reduce personnel costs.",
        "source": ["https://federalnewsnetwork.com/defense-main/2025/02/dod-to-fire-5400-probationary-employees-next-week-with-hiring-freeze-to-follow/"]
      },
      {
        "agency": "DHS",
        "date": "2025-02-16",
        "fired": "400",
        "rehired": "0",
        "total_employees": 240000,
        "summary": "The Department of Homeland Security (DHS) terminated over 400 employees across various agencies, including FEMA and CISA, as part of the administration's efforts to streamline operations.",
        "source": ["https://www.cbsnews.com/news/trump-administration-fires-over-400-dhs-employees-as-mass-firings-continue/"]
      },
      {
        "agency": "NSA",
        "date": "N/A",
        "fired": "0",
        "rehired": "0",
        "total_employees": 32000,
        "summary": "No reported changes.",
        "source": ["https://www.nsa.gov/news-features/press-room/2025/nsa-continues-mission-amidst-federal-changes/"]
      },
      {
        "agency": "FBI",
        "date": "2025-02-25",
        "fired": "0",
        "rehired": "0",
        "total_employees": 35000,
        "summary": "No reported changes.",
        "source": ["https://www.politico.com/news/2025/02/25/pentagon-defense-russia-ukraine-00206008"]
      },
      {
        "agency": "FBI",
        "date": "2025-01-30",
        "fired": "8",
        "rehired": "0",
        "total_employees": 35000,
        "summary": "At least six senior FBI leaders were ordered to retire, resign, or face termination by January 30, 2025. Additionally, eight top FBI officials were dismissed on February 2, 2025, as part of a broader restructuring under the new administration.",
        "source": ["https://www.cnn.com/2025/01/30/politics/senior-fbi-leaders-demoted-wray/index.html"]
      },
      {
        "agency": "FBI",
        "date": "2025-02-02",
        "fired": "5000",
        "rehired": "0",
        "total_employees": 35000,
        "summary": "The FBI was directed to provide a list of all employees involved in January 6 investigations, leading to concerns about potential terminations. Reports suggest that up to 5000 employees may be affected.",
        "source": ["https://www.reuters.com/world/us/fbi-staff-ordered-reveal-their-role-jan-6-probes-by-monday-2025-02-02/"]
      },
      {
        "agency": "CIA",
        "date": "N/A",
        "fired": "0",
        "rehired": "0",
        "total_employees": 21000,
        "summary": "No reported changes.",
        "source": ["https://www.cia.gov/press-releases-statements/cia-continues-operations-amidst-federal-restructuring/"]
      },
      {
        "agency": "DOE (NNSA)",
        "date": "2025-02-14",
        "fired": "50",
        "rehired": "0",
        "total_employees": 3700,
        "summary": "The Department of Energy's National Nuclear Security Administration (NNSA) laid off approximately 50 employees as part of broader federal workforce reductions.",
        "source": ["https://www.reuters.com/world/us/sweeping-us-energy-department-layoffs-hit-offices-loans-nuclear-security-sources-say-2025-02-14/"]
      },
      {
        "agency": "FEMA",
        "date": "2025-02-16",
        "fired": "200",
        "rehired": "0",
        "total_employees": 20000,
        "summary": "The Federal Emergency Management Agency (FEMA) terminated over 200 employees as part of the administration's efforts to streamline operations.",
        "source": ["https://www.cbsnews.com/news/trump-administration-fires-over-400-dhs-employees-as-mass-firings-continue/"]
      },
      {
        "agency": "USDA",
        "date": "2025-02-14",
        "fired": "4200",
        "rehired": "0",
        "total_employees": 100000,
        "summary": "The U.S. Department of Agriculture (USDA) laid off approximately 4,200 employees, affecting various agencies including the Forest Service and the Natural Resources Conservation Service (NRCS). These layoffs have disrupted critical agricultural research and services.",
        "source": ["https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html"]
      },
      {
        "agency": "FSA",
        "date": "2025-02-14",
        "fired": "290",
        "rehired": "0",
        "total_employees": 10000,
        "summary": "The Farm Service Agency (FSA) terminated approximately 290 employees, impacting loan analysts and field staff, which may affect services to farmers and ranchers.",
        "source": ["https://www.oklahomafarmreport.com/okfr/2025/02/20/questions-abound-after-trump-administration-fires-over-1700-nrcs-employees/"]
      },
      {
        "agency": "USAID",
        "date": "2025-02-14",
        "fired": "9700",
        "rehired": "0",
        "total_employees": 10000,
        "summary": "The United States Agency for International Development (USAID) experienced a drastic reduction, with approximately 9,700 employees placed on administrative leave, effectively reducing the workforce to around 300 employees. This action has disrupted numerous humanitarian programs and prompted legal challenges.",
        "source": ["https://www.reuters.com/world/us/firings-us-agency-foreshadow-second-wave-mass-government-layoffs-2025-02-24/"]
      },
      {
        "agency": "Department of Education",
        "date": "2025-02-14",
        "fired": "3700",
        "rehired": "0",
        "total_employees": 4000,
        "summary": "The Department of Education laid off approximately 3,700 employees, constituting about 92.5% of its workforce, as part of the administration's efforts to downsize federal agencies.",
        "source": ["https://www.npr.org/2025/02/14/nx-s1-5298144/federal-layoffs-usda-hud-defense-trump"]
      },
      {
        "agency": "HUD",
        "date": "2025-02-14",
        "fired": "7000",
        "rehired": "0",
        "total_employees": 8000,
        "summary": "The Department of Housing and Urban Development (HUD) terminated approximately 7000 employees, representing about 87.5% of its workforce, as part of federal workforce reduction initiatives.",
        "source": ["https://www.npr.org/2025/02/14/nx-s1-5298144/federal-layoffs-usda-hud-defense-trump"]
      },
      {
        "agency": "SSA",
        "date": "2025-02-14",
        "fired": "12000",
        "rehired": "0",
        "total_employees": 60000,
        "summary": "The Social Security Administration (SSA) laid off approximately 12000 employees, accounting for about 20% of its workforce, as part of broader federal workforce downsizing efforts.",
        "source": ["https://www.npr.org/2025/02/14/nx-s1-5298144/federal-layoffs-usda-hud-defense-trump"]
      },
      {
        "agency": "OPM",
        "date": "2025-02-13",
        "fired": "200",
        "rehired": "0",
        "total_employees": 5000,
        "summary": "The Office of Personnel Management (OPM) dismissed approximately 200 probationary employees as part of the administration's initiative to streamline government operations.",
        "source": ["https://www.npr.org/2025/02/14/nx-s1-5298144/federal-layoffs-usda-hud-defense-trump"]
      },
      {
        "agency": "Department of Veterans Affairs (VA)",
        "date": "2025-02-14",
        "fired": "2400",
        "rehired": "0",
        "total_employees": 377805,
        "summary": "The Department of Veterans Affairs (VA) laid off approximately 2,400 employees, leading to concerns about potential negative impacts on veteran care. VA Secretary Doug Collins asserted that these changes would not compromise veteran healthcare, despite pushback from employees and lawmakers.",
        "source": ["https://www.businessinsider.com/veterans-affairs-musk-doge-opm-email-trump-federal-workers-2025-2"]
      },
      {
        "agency": "Department of the Interior (DOI)",
        "date": "2025-02-14",
        "fired": "2300",
        "rehired": "0",
        "total_employees": 70000,
        "summary": "The Department of the Interior (DOI) laid off approximately 2,300 employees, affecting various bureaus including the Bureau of Land Management and the National Park Service. These layoffs have raised concerns about the management of public lands and natural resources.",
        "source": ["https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html"]
      },
      {
        "agency": "National Park Service (NPS)",
        "date": "2025-02-14",
        "fired": "1000",
        "rehired": "0",
        "total_employees": 20000,
        "summary": "The National Park Service (NPS) terminated approximately 1000 employees, impacting park operations and maintenance. These reductions have led to concerns about the preservation of national parks and the visitor experience.",
        "source": ["https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html"]
      },
      {
        "agency": "Bureau of Land Management (BLM)",
        "date": "2025-02-14",
        "fired": "800",
        "rehired": "0",
        "total_employees": 10000,
        "summary": "The Bureau of Land Management (BLM) laid off approximately 800 employees, affecting land management and resource conservation efforts. These layoffs have raised concerns about the oversight of public lands.",
        "source": ["https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html"]
      },
      {
        "agency": "Bureau of Indian Education (BIE)",
        "date": "2025-02-14",
        "fired": "85",
        "rehired": "0",
        "total_employees": 2000,
        "summary": "The Bureau of Indian Education (BIE) terminated approximately 85 employees, impacting educational services for Native American communities. These layoffs have raised concerns about the quality of education in BIE-operated schools.",
        "source": ["https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html"]
      },
      {
        "agency": "National Science Foundation (NSF)",
        "date": "2025-02-18",
        "fired": "168",
        "rehired": "0",
        "total_employees": 1680,
        "summary": "The National Science Foundation (NSF) terminated approximately 168 employees, constituting about 10% of its workforce. These layoffs were part of broader federal workforce reductions and have raised concerns about the impact on scientific research funding and operations.",
        "source": ["https://www.science.org/content/article/national-science-foundation-fires-168-workers-federal-purge-continues"]
      },
      {
        "agency": "Federal Aviation Administration (FAA)",
        "date": "2025-02-17",
        "fired": "100",
        "rehired": "0",
        "total_employees": 45000,
        "summary": "The Federal Aviation Administration (FAA) laid off approximately 100 employees, including personnel responsible for radar, landing, and navigational aid maintenance. These terminations have raised concerns about aviation safety and operational efficiency.",
        "source": ["https://apnews.com/article/trump-firings-faa-air-traffic-control-2025-02-17"]
      },
      {
        "agency": "National Nuclear Security Administration (NNSA)",
        "date": "2025-02-13",
        "fired": "100",
        "rehired": "0",
        "total_employees": 3700,
        "summary": "The National Nuclear Security Administration (NNSA) terminated approximately 100 employees responsible for designing, building, and overseeing the U.S. nuclear weapons stockpile. These layoffs have raised concerns about national security and the management of the nuclear arsenal.",
        "source": ["https://www.bbc.com/news/world-us-canada-64662016"]
      },
      {
        "agency": "Environmental Protection Agency (EPA)",
        "date": "2025-02-14",
        "fired": "559",
        "rehired": "0",
        "total_employees": 14000,
        "summary": "The Environmental Protection Agency (EPA) terminated 559 employees, impacting various environmental programs and services. These layoffs have raised concerns about the agency's capacity to enforce environmental regulations and protect public health.",
        "source": ["https://nymag.com/intelligencer/2025/02/how-many-federal-employees-fired-jobs-cut-trump-doge.html"]
      },
      {
        "agency": "Department of Housing and Urban Development (HUD)",
        "date": "2025-02-14",
        "fired": "7000",
        "rehired": "0",
        "total_employees": 8000,
        "summary": "The Department of Housing and Urban Development (HUD) terminated approximately 7000 employees, representing about 87.5% of its workforce. These layoffs have significantly impacted the agency's ability to manage housing programs and services.",
        "source": ["https://www.npr.org/2025/02/14/5298144/federal-layoffs-usda-hud-defense-trump"]
      }
  ];
 
export default connectDB;