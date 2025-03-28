import mongoose from "mongoose";


const GuestSchema = new mongoose.Schema(
{
    name: { type: String, required: true },
    email: { type: String, required: true },
    status: { type: String, default: null },
},
{ timestamps: true }
);


const BudgetSchema = new mongoose.Schema(
{
    category: { type: String },
    amount: { type: Number, required: true },
    description: { type: String },
},
{ timestamps: true }
);


const AgendaSchema = new mongoose.Schema(
{
    agendaItem: { type: String, required: true },
    scheduledAt: { type: Date },
},
{ timestamps: true }
);

const ProjectSchema = new mongoose.Schema(
{
    projectName: { type: String, required: true },
    description: { type: String },
    guests: [GuestSchema],
    budgets: [BudgetSchema],
    agendas: [AgendaSchema],
},
{ timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);
