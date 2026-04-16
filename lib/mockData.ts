// Realistic mock loan data — a conventional purchase loan that's at the Clear-to-Close stage
export const mockLoan = {
  loanNumber: '2026-CMG-004781',
  borrowers: 'John & Jane Smith',
  property: '1847 Maple Ridge Dr, Denver, CO 80220',
  loanAmount: '$420,000',
  purchasePrice: '$525,000',
  loanType: 'Conventional 30yr Fixed',
  rate: '6.375%',
  status: 'Clear to Close',
  lo: 'Kim Winters',
  processor: 'Sarah Chen',
};

// Date values keyed by DateField.id — null means the date hasn't occurred yet
export const mockDates: Record<string, string | null> = {
  // Status Milestones
  prospect:           '2026-03-05',
  lePending:          '2026-03-10',
  fileReceived:       '2026-03-14',
  uwReceived:         '2026-03-25',
  approvedDate:       '2026-03-28',
  dateLocked:         '2026-03-15',
  conditionForReview: '2026-03-30',
  changesToUW:        '2026-04-01',
  ctcRequested:       '2026-04-03',
  clearToClose:       '2026-04-05',
  docsOut:            '2026-04-10',
  docsBack:           null,
  fundsOrdered:       null,
  fundsSent:          null,
  funded:             null,
  withdrawalDate:     null,

  // TRID / Regulatory
  applicationDate:              '2026-03-10',
  leDueDate:                    '2026-03-13',
  initialLeDeliveryDate:        '2026-03-11',
  verbalItpReceived:            '2026-03-11',
  intentToProceed:              '2026-03-12',
  lastLeReceivedDate:           '2026-03-20',
  lastLeDeliveredDate:          '2026-03-19',
  cdRequestDate:                '2026-04-05',
  cdDeliveredDate:              '2026-04-06',
  cdReceivedDate:               '2026-04-07',
  earliestClosingDate:          '2026-04-09',
  scheduledClosingDate:         '2026-04-15',
  novSentToBorrower:            null,
  appraisalDeliveredToBorrower: '2026-03-24',
  appraisalTimingWaiver:        null,

  // Key Dates
  originalApprovedDate: '2026-03-28',
  loanApprovedDate:     '2026-03-28',
  lockExpiration:       '2026-04-29',
  scheduledFundingDate: '2026-04-15',
  disbursementDate:     null,
  cdSentToTitle:        '2026-04-06',
  cdApprovedByTitle:    '2026-04-07',
  initialCdAcknowledged: '2026-04-07',
  initialLeAcknowledged: '2026-03-12',
  leRequested:          '2026-03-10',
  noteDate:             null,
  firstPaymentDate:     '2026-06-01',
  statusChangedDate:    '2026-04-10',

  // Rate Lock
  lockRequestTime:    '2026-03-15',
  lockStartDate:      '2026-03-15',
  lockExpirationDate: '2026-04-29',
  originalLockDate:   '2026-03-15',
  lockProcessedTime:  '2026-03-15',

  // Expiration Dates
  creditDocExpiration:       '2026-07-10',
  preApprovalExpirationDate: '2026-06-10',
  appraisalExpirationDate:   '2026-09-22',
  assetDocExpirationDate:    '2026-05-14',
  incomeDocExpirationDate:   '2026-05-14',
  cplExpirationDate:         '2026-06-30',
  titleDocExpirationDate:    '2026-07-01',
  verbalVoeExpiration:       '2026-04-22',
  approvalExpires:           '2026-06-28',

  // Contract & Commitment
  contractClosingDate:        '2026-04-15',
  amendedContractClosingDate: null,
  purchaseContractDate:       '2026-03-08',
  commitmentContingencyDate1: '2026-03-22',
  commitmentContingencyDate2: '2026-04-01',
  commitmentContingencyDate3: null,
  commitmentContingencyDateMet1: '2026-03-20',
  commitmentContingencyDateMet2: '2026-03-31',
  commitmentDate:             '2026-03-28',

  // Appraisal
  appraisalOrderCreated:   '2026-03-14',
  appraisalCompleted:      '2026-03-22',
  appraisalReceivedByCmg:  '2026-03-23',
  appraisalApprovedByUw:   '2026-03-27',

  // Disclosures & Consent
  disclosureDeadline:          '2026-03-13',
  selfDisclosureDeadline:      '2026-03-20',
  initialDisclosuresRequested: '2026-03-10',
  eConsentDate:                '2026-03-10',
  creditAuthDate:              '2026-03-10',

  // Other Dates
  caseNoDate:                      null,
  miOrdered:                       '2026-03-14',
  miReceived:                      '2026-03-18',
  selectedForQc:                   null,
  qcCompleted:                     null,
  declinedDate:                    null,
  denialNoticeSent:                null,
  creditFirstIssuedDate:           '2026-03-10',
  prequalDate:                     '2026-03-05',
  processingHoldDate:              null,
  processingHoldRelease:           null,
  wireInstructionsConfirmed:       null,
  fastPassRequested:               null,
  conditionsDiscussedWithBorrower: '2026-03-31',

  // Builder Business
  upgradeDecisionDue:    '2026-03-20',
  additionalDepositDue:  '2026-04-01',
  rateLockDueDate:       '2026-03-14',
  floatDownWindowOpens:  '2026-04-15',
  floatDownWindowCloses: '2026-04-25',

  // Documentation Due Dates
  customDocDueDate1:     '2026-05-15',
  customDocDueDate2:     null,
};
