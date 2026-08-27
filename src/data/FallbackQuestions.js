const questions = [
 
  
  // MARKETING

 
  {
    id: "mkt1",
    cluster: "Marketing",
    question: "A clothing brand lowers its prices during the last two weeks of a season to clear remaining inventory. What pricing strategy is this?",
    options: [
      "Markdown pricing",
      "Penetration pricing",
      "Price skimming",
      "Cost-plus pricing",
    ],
    correctIndex: 0,
    explanation: "Markdown pricing reduces the original price to move slow-selling or seasonal inventory before it loses value.",
  },
 
  {
    id: "mkt2",
    cluster: "Marketing",
    question: "Which element of the marketing mix is a company changing when it moves from selling only in stores to also selling online?",
    options: [
      "Product",
      "Price",
      "Place",
      "Promotion",
    ],
    correctIndex: 2,
    explanation: "Place refers to distribution — how and where the product reaches the customer. Adding an online channel changes distribution.",
  },
 
  {
    id: "mkt3",
    cluster: "Marketing",
    question: "A company divides its customers into groups based on age, income, and family size. This is an example of what type of segmentation?",
    options: [
      "Psychographic",
      "Demographic",
      "Geographic",
      "Behavioral",
    ],
    correctIndex: 1,
    explanation: "Demographic segmentation uses measurable population characteristics such as age, income, gender, and family size.",
  },
 

  // FINANCE

 
  {
    id: "fin1",
    cluster: "Finance",
    question: "Which financial statement shows a company's revenues and expenses over a period of time?",
    options: [
      "Balance sheet",
      "Income statement",
      "Statement of cash flows",
      "Statement of retained earnings",
    ],
    correctIndex: 1,
    explanation: "The income statement reports revenues and expenses over a period, ending in net income or net loss. A balance sheet shows a single point in time.",
  },
 
  {
    id: "fin2",
    cluster: "Finance",
    question: "In the basic accounting equation, assets equal liabilities plus what?",
    options: [
      "Revenue",
      "Net income",
      "Owner's equity",
      "Expenses",
    ],
    correctIndex: 2,
    explanation: "The accounting equation is Assets = Liabilities + Owner's Equity. It must stay balanced after every transaction.",
  },
 
  {
    id: "fin3",
    cluster: "Finance",
    question: "A business has strong sales but cannot pay its bills this month. What problem is it most likely facing?",
    options: [
      "Low gross margin",
      "Poor cash flow",
      "High depreciation",
      "Excess owner's equity",
    ],
    correctIndex: 1,
    explanation: "A company can be profitable on paper and still lack cash if receivables come in slower than payables are due. That is a cash flow problem, not a profitability problem.",
  },
 

  // HOSPITALITY AND TOURISM

 
  {
    id: "hos1",
    cluster: "Hospitality and Tourism",
    question: "A hotel raises its room rates during a major citywide convention. What practice is this?",
    options: [
      "Revenue management",
      "Loss leader pricing",
      "Bundling",
      "Cost-plus pricing",
    ],
    correctIndex: 0,
    explanation: "Revenue management adjusts pricing based on forecasted demand to maximize revenue from a fixed number of rooms.",
  },
 
  {
    id: "hos2",
    cluster: "Hospitality and Tourism",
    question: "A guest complains about a billing error at checkout. What should the front desk agent do first?",
    options: [
      "Explain hotel billing policy",
      "Listen fully and acknowledge the concern",
      "Call a manager immediately",
      "Offer a free future night",
    ],
    correctIndex: 1,
    explanation: "Service recovery starts with listening and acknowledging. Jumping to policy or compensation before understanding the issue usually escalates the complaint.",
  },
 
  {
    id: "hos3",
    cluster: "Hospitality and Tourism",
    question: "A resort sees far fewer bookings in the fall than in the summer. What is this pattern called?",
    options: [
      "Market saturation",
      "Seasonality",
      "Overbooking",
      "Churn",
    ],
    correctIndex: 1,
    explanation: "Seasonality describes predictable demand swings tied to time of year, which hospitality businesses plan staffing and pricing around.",
  },
 

  // BUSINESS MANAGEMENT AND ADMINISTRATION

 
  {
    id: "bma1",
    cluster: "Business Management and Administration",
    question: "Which management function involves comparing actual results against planned goals and correcting differences?",
    options: [
      "Planning",
      "Organizing",
      "Leading",
      "Controlling",
    ],
    correctIndex: 3,
    explanation: "Controlling is the function of measuring performance against standards and taking corrective action when results fall short.",
  },
 
  {
    id: "bma2",
    cluster: "Business Management and Administration",
    question: "A legally enforceable agreement between two parties requires offer, acceptance, and what third element?",
    options: [
      "Consideration",
      "Notarization",
      "Written form",
      "Witnesses",
    ],
    correctIndex: 0,
    explanation: "Consideration means each party gives up something of value. Without it, an agreement is generally a promise rather than an enforceable contract.",
  },
 
  {
    id: "bma3",
    cluster: "Business Management and Administration",
    question: "An employee reports that a manager is falsifying expense reports. What is the company's most appropriate first step?",
    options: [
      "Terminate the manager immediately",
      "Ignore it unless the amount is large",
      "Investigate through established procedures",
      "Ask the employee to gather more proof alone",
    ],
    correctIndex: 2,
    explanation: "Ethical and legal handling requires a fair investigation through established procedures before any disciplinary action is taken.",
  },
 

  // ENTREPRENEURSHIP

 
  {
    id: "ent1",
    cluster: "Entrepreneurship",
    question: "Which business structure exposes the owner to unlimited personal liability for business debts?",
    options: [
      "Corporation",
      "Sole proprietorship",
      "Limited liability company",
      "S corporation",
    ],
    correctIndex: 1,
    explanation: "In a sole proprietorship there is no legal separation between owner and business, so personal assets can be used to satisfy business debts.",
  },
 
  {
    id: "ent2",
    cluster: "Entrepreneurship",
    question: "An entrepreneur gives up a portion of ownership in exchange for startup funding. What type of financing is this?",
    options: [
      "Debt financing",
      "Equity financing",
      "Trade credit",
      "Bootstrapping",
    ],
    correctIndex: 1,
    explanation: "Equity financing raises money by selling ownership stake. Debt financing borrows money that must be repaid without giving up ownership.",
  },
 
  {
    id: "ent3",
    cluster: "Entrepreneurship",
    question: "A startup sells 400 units at $25 each with variable costs of $15 per unit and fixed costs of $3,000. Did it break even?",
    options: [
      "Yes, exactly at break-even",
      "No, it fell short by $1,000",
      "Yes, it exceeded break-even by $1,000",
      "No, it fell short by $3,000",
    ],
    correctIndex: 2,
    explanation: "Contribution margin is $10 per unit, so 400 units generate $4,000 against $3,000 in fixed costs — $1,000 above break-even. Break-even was 300 units.",
  },
 
];
 
export default questions;