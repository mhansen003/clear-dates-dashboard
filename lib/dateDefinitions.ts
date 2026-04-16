export interface DateField {
  id: string;
  label: string;
  category: string;
  description: string;
}

export interface Category {
  id: string;
  label: string;
  color: string;       // Tailwind color class prefix (e.g. "blue" → bg-blue-500)
  borderColor: string;  // Tailwind border color
}

export const categories: Category[] = [
  { id: 'status',      label: 'Loan Status Milestones',      color: 'blue',    borderColor: 'border-blue-500/40' },
  { id: 'trid',        label: 'TRID / Regulatory',           color: 'purple',  borderColor: 'border-purple-500/40' },
  { id: 'key',         label: 'Key Dates',                   color: 'emerald', borderColor: 'border-emerald-500/40' },
  { id: 'lock',        label: 'Rate Lock',                   color: 'amber',   borderColor: 'border-amber-500/40' },
  { id: 'expiration',  label: 'Expiration Dates',            color: 'red',     borderColor: 'border-red-500/40' },
  { id: 'contract',    label: 'Contract & Commitment',       color: 'cyan',    borderColor: 'border-cyan-500/40' },
  { id: 'appraisal',   label: 'Appraisal',                   color: 'teal',    borderColor: 'border-teal-500/40' },
  { id: 'disclosure',  label: 'Disclosures & Consent',       color: 'indigo',  borderColor: 'border-indigo-500/40' },
  { id: 'other',       label: 'Other Dates',                 color: 'slate',   borderColor: 'border-slate-500/40' },
  { id: 'builder',    label: 'Builder Business',             color: 'lime',    borderColor: 'border-lime-500/40' },
  { id: 'docdue',     label: 'Documentation Due Dates',      color: 'pink',    borderColor: 'border-pink-500/40' },
];

export const dateFields: DateField[] = [
  // ── Status Milestones ─────────────────────────────────────────
  { id: 'prospect',            label: 'Prospect',                   category: 'status', description: 'Date loan prospect was created' },
  { id: 'lePending',           label: 'LE Pending',                 category: 'status', description: 'Date awaiting Loan Estimate' },
  { id: 'fileReceived',        label: 'File Received',              category: 'status', description: 'Date loan file received in processing' },
  { id: 'uwReceived',          label: 'UW Received',                category: 'status', description: 'Date file sent to underwriting' },
  { id: 'approvedDate',        label: 'Approved',                   category: 'status', description: 'Date of initial approval decision' },
  { id: 'dateLocked',          label: 'Date Locked',                category: 'status', description: 'Date rate lock was established' },
  { id: 'conditionForReview',  label: 'Conditions for Review',      category: 'status', description: 'Date conditions sent to underwriter' },
  { id: 'changesToUW',         label: 'Changes to UW',              category: 'status', description: 'Date changes submitted to underwriter' },
  { id: 'ctcRequested',        label: 'CTC Requested',              category: 'status', description: 'Date Clear to Close was requested' },
  { id: 'clearToClose',        label: 'Clear to Close',             category: 'status', description: 'Date loan cleared to close' },
  { id: 'docsOut',             label: 'Docs Out',                   category: 'status', description: 'Date closing documents sent to borrower' },
  { id: 'docsBack',            label: 'Docs Back',                  category: 'status', description: 'Date closing documents returned by borrower' },
  { id: 'fundsOrdered',        label: 'Funds Ordered',              category: 'status', description: 'Date funds ordered/requested' },
  { id: 'fundsSent',           label: 'Funds Sent',                 category: 'status', description: 'Date funds transmitted to title company' },
  { id: 'funded',              label: 'Funded',                     category: 'status', description: 'Date loan was funded' },
  { id: 'withdrawalDate',      label: 'Withdrawal',                 category: 'status', description: 'Date loan withdrawn from process' },

  // ── TRID / Regulatory ─────────────────────────────────────────
  { id: 'applicationDate',              label: 'Application Date',              category: 'trid', description: 'Date loan application received (triggers 3-day LE rule)' },
  { id: 'leDueDate',                    label: 'LE Due Date',                   category: 'trid', description: 'Deadline for initial Loan Estimate delivery' },
  { id: 'initialLeDeliveryDate',        label: 'Initial LE Delivered',          category: 'trid', description: 'Date initial Loan Estimate was sent' },
  { id: 'verbalItpReceived',            label: 'Verbal ITP Received',           category: 'trid', description: 'Date verbal Intent to Proceed given by borrower' },
  { id: 'intentToProceed',              label: 'Intent to Proceed',             category: 'trid', description: 'Date formal Intent to Proceed received' },
  { id: 'lastLeReceivedDate',           label: 'Last LE Received',              category: 'trid', description: 'Date final LE was acknowledged by borrower' },
  { id: 'lastLeDeliveredDate',          label: 'Last LE Delivered',             category: 'trid', description: 'Date final LE was sent to borrower' },
  { id: 'cdRequestDate',                label: 'CD Request Date',               category: 'trid', description: 'Date initial Closing Disclosure was requested' },
  { id: 'cdDeliveredDate',              label: 'CD Delivered',                  category: 'trid', description: 'Date Closing Disclosure delivered to borrower' },
  { id: 'cdReceivedDate',               label: 'CD Received',                   category: 'trid', description: 'Date Closing Disclosure acknowledged by borrower' },
  { id: 'earliestClosingDate',          label: 'Earliest Closing Date',         category: 'trid', description: 'Earliest allowed closing date (3+ days after CD delivery)' },
  { id: 'scheduledClosingDate',         label: 'Scheduled Closing Date',        category: 'trid', description: 'Actual scheduled closing date' },
  { id: 'novSentToBorrower',            label: 'NOV Sent to Borrower',          category: 'trid', description: 'Date Notice of Void sent' },
  { id: 'appraisalDeliveredToBorrower', label: 'Appraisal Delivered to Borrower', category: 'trid', description: 'Date appraisal delivered per timing rules' },
  { id: 'appraisalTimingWaiver',        label: 'Appraisal Timing Waiver',       category: 'trid', description: 'Date appraisal timing waiver granted' },

  // ── Key Dates ─────────────────────────────────────────────────
  { id: 'originalApprovedDate',         label: 'Original Approved Date',      category: 'key', description: 'Date of initial approval' },
  { id: 'loanApprovedDate',             label: 'Loan Approved Date',          category: 'key', description: 'Date of final approval' },
  { id: 'lockExpiration',               label: 'Lock Expiration',             category: 'key', description: 'Date rate lock expires' },
  { id: 'scheduledFundingDate',         label: 'Scheduled Funding Date',      category: 'key', description: 'Target date for funding' },
  { id: 'disbursementDate',             label: 'Disbursement Date',           category: 'key', description: 'Date funds disbursed' },
  { id: 'cdSentToTitle',                label: 'CD Sent to Title',            category: 'key', description: 'Date CD sent to title company' },
  { id: 'cdApprovedByTitle',            label: 'CD Approved by Title',        category: 'key', description: 'Date title approved the CD' },
  { id: 'initialCdAcknowledged',        label: 'Initial CD Acknowledged',     category: 'key', description: 'Date initial CD acknowledged by borrower' },
  { id: 'initialLeAcknowledged',        label: 'Initial LE Acknowledged',     category: 'key', description: 'Date initial LE acknowledged by borrower' },
  { id: 'leRequested',                  label: 'LE Requested',                category: 'key', description: 'Date LE requested from BytePro' },
  { id: 'noteDate',                     label: 'Note Date',                   category: 'key', description: 'Promissory note date' },
  { id: 'firstPaymentDate',             label: 'First Payment Date',          category: 'key', description: 'Date first mortgage payment is due' },
  { id: 'statusChangedDate',            label: 'Status Changed',              category: 'key', description: 'Date of last status change' },

  // ── Rate Lock ─────────────────────────────────────────────────
  { id: 'lockRequestTime',   label: 'Lock Requested',        category: 'lock', description: 'Timestamp when rate lock was requested' },
  { id: 'lockStartDate',     label: 'Lock Start Date',       category: 'lock', description: 'Date rate lock became effective' },
  { id: 'lockExpirationDate', label: 'Lock Expiration Date', category: 'lock', description: 'Date rate lock expires' },
  { id: 'originalLockDate',  label: 'Original Lock Date',    category: 'lock', description: 'Original lock date for refinancing scenarios' },
  { id: 'lockProcessedTime', label: 'Lock Processed',        category: 'lock', description: 'Timestamp when lock was processed by pricing engine' },

  // ── Expiration Dates ──────────────────────────────────────────
  { id: 'creditDocExpiration',        label: 'Credit Doc Expiration',        category: 'expiration', description: 'Expiration date for credit documents' },
  { id: 'preApprovalExpirationDate',  label: 'Pre-Approval Expiration',      category: 'expiration', description: 'Date pre-approval letter expires' },
  { id: 'appraisalExpirationDate',    label: 'Appraisal Expiration',         category: 'expiration', description: 'Date appraisal report expires' },
  { id: 'assetDocExpirationDate',     label: 'Asset Doc Expiration',         category: 'expiration', description: 'Date asset documentation expires' },
  { id: 'incomeDocExpirationDate',    label: 'Income Doc Expiration',        category: 'expiration', description: 'Date income documentation expires' },
  { id: 'cplExpirationDate',          label: 'CPL Expiration',               category: 'expiration', description: 'Closing Protection Letter expiration' },
  { id: 'titleDocExpirationDate',     label: 'Title Doc Expiration',         category: 'expiration', description: 'Date title documents expire' },
  { id: 'verbalVoeExpiration',        label: 'Verbal VOE Expiration',        category: 'expiration', description: 'Verbal Verification of Employment expiration' },
  { id: 'approvalExpires',            label: 'Approval Expires',             category: 'expiration', description: 'Date loan approval expires' },

  // ── Contract & Commitment ─────────────────────────────────────
  { id: 'contractClosingDate',          label: 'Contract Closing Date',       category: 'contract', description: 'Original closing date per purchase contract' },
  { id: 'amendedContractClosingDate',   label: 'Amended Contract Closing',    category: 'contract', description: 'Amended closing date if contract was modified' },
  { id: 'purchaseContractDate',         label: 'Purchase Contract Date',      category: 'contract', description: 'Date purchase contract was signed' },
  { id: 'commitmentContingencyDate1',   label: 'Contingency Date 1',          category: 'contract', description: 'First contingency deadline' },
  { id: 'commitmentContingencyDate2',   label: 'Contingency Date 2',          category: 'contract', description: 'Second contingency deadline' },
  { id: 'commitmentContingencyDate3',   label: 'Contingency Date 3',          category: 'contract', description: 'Third contingency deadline' },
  { id: 'commitmentContingencyDateMet1', label: 'Contingency 1 Met',          category: 'contract', description: 'Date first contingency was satisfied' },
  { id: 'commitmentContingencyDateMet2', label: 'Contingency 2 Met',          category: 'contract', description: 'Date second contingency was satisfied' },
  { id: 'commitmentDate',               label: 'Commitment Date',             category: 'contract', description: 'Date of loan commitment' },

  // ── Appraisal ─────────────────────────────────────────────────
  { id: 'appraisalOrderCreated',       label: 'Appraisal Ordered',           category: 'appraisal', description: 'Date appraisal was ordered' },
  { id: 'appraisalCompleted',          label: 'Appraisal Completed',         category: 'appraisal', description: 'Date appraisal completed by appraiser' },
  { id: 'appraisalReceivedByCmg',     label: 'Appraisal Received by CMG',   category: 'appraisal', description: 'Date appraisal received by CMG' },
  { id: 'appraisalApprovedByUw',      label: 'Appraisal Approved by UW',    category: 'appraisal', description: 'Date UW approved the appraisal' },

  // ── Disclosures & Consent ─────────────────────────────────────
  { id: 'disclosureDeadline',          label: 'Disclosure Deadline',          category: 'disclosure', description: 'Deadline to deliver disclosures' },
  { id: 'selfDisclosureDeadline',      label: 'Self-Disclosure Deadline',     category: 'disclosure', description: 'Self-disclosure delivery deadline' },
  { id: 'initialDisclosuresRequested', label: 'Initial Disclosures Requested', category: 'disclosure', description: 'Date initial disclosures were requested' },
  { id: 'eConsentDate',                label: 'eConsent Date',                category: 'disclosure', description: 'Date borrower provided electronic consent' },
  { id: 'creditAuthDate',              label: 'Credit Auth Date',             category: 'disclosure', description: 'Date credit authorization was given' },

  // ── Other Dates ───────────────────────────────────────────────
  { id: 'caseNoDate',                    label: 'Case Number Assigned',        category: 'other', description: 'Date FHA/VA case number was assigned' },
  { id: 'miOrdered',                     label: 'MI Ordered',                  category: 'other', description: 'Date mortgage insurance was ordered' },
  { id: 'miReceived',                    label: 'MI Received',                 category: 'other', description: 'Date mortgage insurance commitment received' },
  { id: 'selectedForQc',                 label: 'Selected for QC',             category: 'other', description: 'Date loan selected for quality control' },
  { id: 'qcCompleted',                   label: 'QC Completed',                category: 'other', description: 'Date quality control review completed' },
  { id: 'declinedDate',                  label: 'Declined',                    category: 'other', description: 'Date loan was declined' },
  { id: 'denialNoticeSent',              label: 'Denial Notice Sent',          category: 'other', description: 'Date denial notice sent to borrower' },
  { id: 'creditFirstIssuedDate',         label: 'Credit First Issued',         category: 'other', description: 'Date credit report was first pulled' },
  { id: 'prequalDate',                   label: 'Pre-Qualification Date',      category: 'other', description: 'Date borrower was pre-qualified' },
  { id: 'processingHoldDate',            label: 'Processing Hold',             category: 'other', description: 'Date processing hold was applied' },
  { id: 'processingHoldRelease',         label: 'Processing Hold Released',    category: 'other', description: 'Date processing hold was released' },
  { id: 'wireInstructionsConfirmed',     label: 'Wire Instructions Confirmed', category: 'other', description: 'Date wire instructions were confirmed' },
  { id: 'fastPassRequested',             label: 'Fast Pass Requested',         category: 'other', description: 'Date Fast Pass was requested' },
  { id: 'conditionsDiscussedWithBorrower', label: 'Conditions Discussed',      category: 'other', description: 'Date conditions were discussed with borrower' },

  // ── Builder Business ──────────────────────────────────────
  { id: 'upgradeDecisionDue',    label: 'Upgrade Decision Due',     category: 'builder', description: 'Deadline for builder upgrade/option selection decisions' },
  { id: 'additionalDepositDue',  label: 'Additional Deposit Due',   category: 'builder', description: 'Date additional earnest money or builder deposit is due' },
  { id: 'rateLockDueDate',       label: 'Rate Lock Due',            category: 'builder', description: 'Deadline to lock the interest rate for this transaction' },
  { id: 'floatDownWindowOpens',  label: 'Float Down Window Opens',  category: 'builder', description: 'Date float-down eligibility begins (e.g. extended lock watch period starts)' },
  { id: 'floatDownWindowCloses', label: 'Float Down Window Closes', category: 'builder', description: 'Date float-down eligibility ends — last day to exercise float-down to market' },

  // ── Documentation Due Dates ───────────────────────────────
  { id: 'customDocDueDate1',     label: 'Custom Doc Due Date 1',    category: 'docdue', description: 'Customizable documentation reminder (e.g. 1st paystub post-closing, offer letter due)' },
  { id: 'customDocDueDate2',     label: 'Custom Doc Due Date 2',    category: 'docdue', description: 'Customizable documentation reminder (e.g. pension/retirement start proof, mid-txn doc)' },
];

// Default layout — the ~22 most critical dates an LO needs at a glance
export const DEFAULT_LAYOUT_DATE_IDS: string[] = [
  'applicationDate',
  'leRequested',
  'leDueDate',
  'initialLeDeliveryDate',
  'intentToProceed',
  'fileReceived',
  'dateLocked',
  'lockExpiration',
  'uwReceived',
  'approvedDate',
  'appraisalOrderCreated',
  'appraisalCompleted',
  'clearToClose',
  'cdSentToTitle',
  'cdDeliveredDate',
  'cdReceivedDate',
  'earliestClosingDate',
  'scheduledClosingDate',
  'docsOut',
  'docsBack',
  'funded',
  'firstPaymentDate',
  // Builder Business
  'upgradeDecisionDue',
  'additionalDepositDue',
  'rateLockDueDate',
  'floatDownWindowOpens',
  'floatDownWindowCloses',
  // Documentation Due Dates
  'customDocDueDate1',
  'customDocDueDate2',
];

export function getFieldsByCategory(categoryId: string): DateField[] {
  return dateFields.filter(f => f.category === categoryId);
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find(c => c.id === categoryId);
}
