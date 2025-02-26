import dotenv from 'dotenv';
import Agency from '../models/agencySchema.mjs';
dotenv.config();
import mongoose from 'mongoose';

const initialData = [ 
{ "Agency": "NIH", "Date": "February 15, 2025", "fired": 1165, "rehired": 0, "totalPersonnel": 20570, "Summary": "The National Institutes of Health (NIH) laid off approximately 1,165 employees, constituting about 5.7% of its workforce, as part of a broader federal workforce reduction initiative.", "Source": "https://www.reuters.com/world/us/trump-administration-lays-off-fda-employees-stat-news-reports-2025-02-16/" }, { "Agency": "CDC", "Date": "February 14, 2025", "fired": 1300, "rehired": 0, "totalPersonnel": 13000, "Summary": "The Centers for Disease Control and Prevention (CDC) terminated approximately 1,300 probationary employees, representing about 10% of its workforce, as part of federal workforce reduction efforts.", "Source": "https://www.reuters.com/business/healthcare-pharmaceuticals/cdc-lose-one-tenth-workforce-under-trump-administration-probationary-job-cuts-ap-2025-02-14/" }, { "Agency": "FDA", "Date": "February 16, 2025", "fired": 700, "rehired": 220, "totalPersonnel": 17000, "Summary": "The Food and Drug Administration (FDA) initially laid off approximately 700 employees, including 220 from the medical device center. Following industry backlash, the FDA reinstated the 220 medical device staffers.", "Source": "https://apnews.com/article/85d4743e4ce88dbe3b99c813bad4b702" }, { "Agency": "HHS", "Date": "February 13, 2025", "fired": 5200, "rehired": 0, "totalPersonnel": 80000, "Summary": "The Department of Health and Human Services (HHS) laid off approximately 5,200 probationary employees as part of a federal workforce reduction directive.", "Source": "https://www.nytimes.com/2025/02/13/us/politics/trump-layoffs-probationary-workers.html" }, { "Agency": "EPA", "Date": "February 14, 2025", "fired": 559, "rehired": 0, "totalPersonnel": 14000, "Summary": "The Environmental Protection Agency (EPA) terminated 559 employees, impacting various environmental programs and services.", "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html" }, 
{ "Agency": "CFPB", "Date": "February 13, 2025", "fired": 70, "rehired": 0, "totalPersonnel": 1500, "Summary": "The Consumer Financial Protection Bureau (CFPB) terminated approximately 70 to 100 employees. Further layoffs were paused following a federal court order.", "Source": "https://www.npr.org/2025/02/13/nx-s1-5296929/cfpb-layoffs-staff-trump-doge" }, { "Agency": "SEC", "Date": "February 24, 2025", "fired": 100, "rehired": 0, "totalPersonnel": 4500, "Summary": "The Securities and Exchange Commission (SEC) plans to eliminate regional director positions as part of cost-cutting measures. The exact number of layoffs has not been disclosed.", "Source": "https://www.reuters.com/world/us/us-securities-regulator-plans-cut-regional-directors-due-trump-administration-2025-02-24/" },
{ "Agency": "IRS", "Date": "February 20, 2025", "fired": 6000, "rehired": 0, "totalPersonnel": 100000, "Summary": "The Internal Revenue Service (IRS) began laying off more than 6000 new and newly-promoted employees across the country, impacting approximately 6-7% of its workforce.", "Source": "https://abcnews.go.com/US/agencies-federal-workers-fired/story?id=118901289" },
{
        "Agency": "FBI",
        "Date": "January 30, 2025",
        "fired": 8,
        "rehired": 0,
        "totalPersonnel": 35000,
        "Summary": "At least six senior FBI leaders were ordered to retire, resign, or face termination by January 30, 2025. Additionally, eight top FBI officials were dismissed on February 2, 2025, as part of a broader restructuring under the new administration.",
        "Source": "https://www.cnn.com/2025/01/30/politics/senior-fbi-leaders-demoted-wray/index.html"
}];
// Function to parse 'MMMM DD, YYYY' format into a Date object
const parseDate = (dateString) => {
    if (dateString === 'N/A') return null;
    const parsedDate = Date.parse(dateString);
    if (isNaN(parsedDate)) {
        console.error(`Invalid date format: ${dateString}`);
        return null;
    }
    return new Date(parsedDate);
};

// Seed function to insert initial data
const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.mongoURI);

        console.log('Connected to MongoDB');

        // Clear existing data
        await Agency.deleteMany({});

        // Parse dates and sort data
        const sortedData = initialData
            .map(item => ({ ...item, date: parseDate(item.Date) }))
            .sort((a, b) => {
                if (a.date === null) return 1; // Place 'N/A' dates at the end
                if (b.date === null) return -1;
                return a.date - b.date;
            });

        // Insert initial data
        await Agency.insertMany(sortedData);

        console.log('Database seeded successfully');
//        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
//        process.exit(1);
    }
};

export default seedDatabase;