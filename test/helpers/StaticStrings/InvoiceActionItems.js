exports.InvoiceActionItems = {

  TITLE_PHONE: 'Conversation script',
  TITLE_EMAIL: 'Email template',
  ACTION_PHONE: 'Email to self',
  ACTION_EMAIL: 'Customize in email',
  TOAST_TEXT: 'Mark as complete',
  TOAST_TEXT_COMPLETE: 'Wohoo, this has been completed',
  YES: 'Yes',


  //Paid
  PAID_Title: 'Thank you email to BILLING_CONTACT_NAME',
  PAID_description: 'Send a quick thank you email. Clients always appreciate the little things.',
  PAID_optionTitle: 'Email Template',
  PAID_emailTemplateIdSubject: 'Thank You!',
  PAID_emailTemplateIdBody: 'Thanks for your business. Please let me know if you have any questions and look forward to doing business in the future.',


  //Not due
  NOT_DUE_Title: 'Status report with BILLING_CONTACT_NAME',
  NOT_DUE_description: 'Check-in with your client on the status of the project.',
  NOT_DUE_optionTitle: 'Email Template',
  NOT_DUE_emailTemplateIdSubject: 'Checking in',
  NOT_DUE_emailTemplateIdBody: 'Hi BILLING_CONTACT_NAME,\n\nI wanted to check in to get your sense of how the project is going. What can we do better? I have a few ideas that I\'d like to share, and I\'d like to hear your thoughts.\n\nIf you want to schedule a call for this please let me know.\n\nAll the best,',


  //Due within 5 days
  DUE_WITHIN_5_DAYS_Phone_Title: 'Conversation with BILLING_CONTACT_NAME',
  DUE_WITHIN_5_DAYS_Phone_description: 'A quick phone conversation is a great way to start dialogue.',
  DUE_WITHIN_5_DAYS_Phone_New_optionTitle: 'Talking points for conversation with good or new client',
  DUE_WITHIN_5_DAYS_Phone_New_phoneTemplateIdSubject: 'Phone Script from PwC Small Business Services',
  DUE_WITHIN_5_DAYS_Phone_New_phoneTemplateIdBody: '\u2022 I wanted to call to check in on how we\'re doing and how you\'re doing.\n\n\u2022 Are we making good progress? What can we do better?\n\n\u2022 Also, our payment for the work we did last month is due in 5 days. Do you have everything you need from us to process the payment?',
  DUE_WITHIN_5_DAYS_Phone_New_audio: '5_days_before_new_client',
  DUE_WITHIN_5_DAYS_Phone_Erratic_optionTitle: 'Talking points for conversation with erratic client',
  DUE_WITHIN_5_DAYS_Phone_Erratic_phoneTemplateIdSubject: 'Phone Script from PwC Small Business Services',
  DUE_WITHIN_5_DAYS_Phone_Erratic_phoneTemplateIdBody: '\u2022 I wanted to call to check in on how we\'re doing and how you\'re doing.\n\n\u2022 Are we making good progress? What can we do better?\n\n\u2022 Also, we are aiming to receive our payment on time this month. It\'s due in 5 days. Do you have everything you need from us to process the payment?',
  DUE_WITHIN_5_DAYS_Phone_Erratic_audio: '5_days_before_erratic',
  DUE_WITHIN_5_DAYS_Phone_Consistently_optionTitle: 'Talking points for conversation with consistently late client',
  DUE_WITHIN_5_DAYS_Phone_Consistently_phoneTemplateIdSubject: 'Phone Script from PwC Small Business Services',
  DUE_WITHIN_5_DAYS_Phone_Consistently_phoneTemplateIdBody: '\u2022 I wanted to call to check in on how we\'re doing and how you\'re doing.\n\n\u2022 Are we making good progress? What can we do better?\n\n\u2022 Also, our payment for the work we did last month is due in 5 days. We very much want to get paid on time. Do you have everything you need from us to process the payment?',
  DUE_WITHIN_5_DAYS_Phone_Consistently_audio: '5_days_before_always_late',
  DUE_WITHIN_5_DAYS_Email_Title: 'Email BILLING_CONTACT_NAME',
  DUE_WITHIN_5_DAYS_Email_description: 'Checking in with your client before the invoice is due can help iron out any issues before it becomes a payments call.',
  DUE_WITHIN_5_DAYS_Email_New_optionTitle: 'Email template for a new client',
  DUE_WITHIN_5_DAYS_Email_New_emailTemplateIdSubject: 'Checking in',
  DUE_WITHIN_5_DAYS_Email_New_emailTemplateIdBody: 'Hi BILLING_CONTACT_NAME,\n\nAs a courtesy to new clients, I wanted to check in to get your sense of how the project is going. Where are we making good progress? What can we do better? I have a few ideas that I\'d like to share, and I\'d like to hear your thoughts.\n\n Also, our payment is due in 5 days. I want to make sure you have everything you need to process the payment.\n\nAll the best,',
  DUE_WITHIN_5_DAYS_Email_Erratic_optionTitle: 'Email template for an erratic client',
  DUE_WITHIN_5_DAYS_Email_Erratic_emailTemplateIdSubject: 'Checking in',
  DUE_WITHIN_5_DAYS_Email_Erratic_emailTemplateIdBody: 'Hi BILLING_CONTACT_NAME,\n\nI wanted to check in to get your sense of how the project is going. What can we do better? I have a few ideas that I\'d like to share, and I\'d like to hear your thoughts.\n\nAlso, do you have everything you need from us for the payment due in 5 days? I want to ensure that you have what you need to process it on time.\n\nIf you want to schedule a call for this please let me know.\n\nAll the best,',
  DUE_WITHIN_5_DAYS_Email_Consistently_optionTitle: 'Email template for a consistently late client',
  DUE_WITHIN_5_DAYS_Email_Consistently_emailTemplateIdSubject: 'Checking in',
  DUE_WITHIN_5_DAYS_Email_Consistently_emailTemplateIdBody: 'Hi BILLING_CONTACT_NAME,\n\nOur payment for the work we did last month is due in 5 days. I want to make sure you have everything you need from me and on your side to process the payment on time.\n\nI also want to do a check-up on the project as a whole. How do you think the project is progressing? What can we do better? I have a few ideas that I\'d like to share, and I\'d like to hear your thoughts.\n\nIf you want to get together or schedule a call for this please let me know. I\'d be happy to get together.\n\nAll the best,',


  //Due today
  DUE_TODAY_Title: 'Talk to BILLING_CONTACT_NAME',
  DUE_TODAY_description: 'If you haven\'t already, give your client a call to check in.',
  DUE_TODAY_optionTitle: 'Check in with your client',
  DUE_TODAY_phoneTemplateIdSubject: 'Phone Script from PwC Small Business Services',
  DUE_TODAY_phoneTemplateIdBody: '\u2022 I wanted to call to check in on how we\'re doing and how you\'re doing.\n\n\u2022 Are we making good progress? What can we do better?\n\n\u2022 Also, our payment for the work we did last month is due in 5 days. Do you have everything you need from us to process the payment?',


  //Due over 5 days
  DUE_OVER_5_DAYS_Phone_Title: 'Check-In with BILLING_CONTACT_NAME',
  DUE_OVER_5_DAYS_Phone_description: 'Check in with your client over the phone or in person; make sure all their questions are answered!',
  DUE_OVER_5_DAYS_Phone_New_optionTitle: 'Talking points for conversation with good or new client',
  DUE_OVER_5_DAYS_Phone_New_phoneTemplateIdSubject: 'Phone Script from PwC Small Business Services',
  DUE_OVER_5_DAYS_Phone_New_phoneTemplateIdBody: '\u2022 I\'m following up on the recent work we did. The payment we were expecting hasn\'t arrived yet, I wanted to see if there was anything you need from me to get that paid.\n\n\u2022 Is there anyone else who I should check back with if it doesn\'t arrive? \n\n\u2022 Thanks, we\'ll let you know as soon as we receive payment.',
  DUE_OVER_5_DAYS_Phone_New_audio: '5_days_late_new_client',
  DUE_OVER_5_DAYS_Phone_Erratic_optionTitle: 'Talking points for conversation with erratic client',
  DUE_OVER_5_DAYS_Phone_Erratic_phoneTemplateIdSubject: 'Phone Script from PwC Small Business Services',
  DUE_OVER_5_DAYS_Phone_Erratic_phoneTemplateIdBody: '\u2022 I\'m following up on the recent work we did. The payment we were expecting hasn\'t arrived yet, I wanted to see if there was anything you need from me to get that paid.\n\n\u2022 Is there anyone besides you that we should contact in order to stay on top of this? It\'s important for us that we receive it soon.\n\n\u2022 Thanks, we\'ll let you know as soon as we receive the payment.',
  DUE_OVER_5_DAYS_Phone_Erratic_audio: '5_days_late_erratic_payer',
  DUE_OVER_5_DAYS_Phone_Consistently_optionTitle: 'Talking points for conversation with consistently late client',
  DUE_OVER_5_DAYS_Phone_Consistently_phoneTemplateIdSubject: 'Phone Script from PwC Small Business Services',
  DUE_OVER_5_DAYS_Phone_Consistently_phoneTemplateIdBody: '\u2022 I\'m following up from our phone call 10 days ago. The payment we were expecting hasn\'t arrived yet, I wanted to see if there were any issues that arose since we last spoke.\n\n\u2022 Is there someone I need to follow up with for this?\n\n\u2022 I\'ll let you know as soon as I receive it, and will follow up in a few days if it doesn\'t arrive.',
  DUE_OVER_5_DAYS_Phone_Consistently_audio: '5_days_late_always_late',
  DUE_OVER_5_DAYS_Email_Title: 'Email BILLING_CONTACT_NAME',
  DUE_OVER_5_DAYS_Email_description: 'If you did not already send one, a quick reminder email can speed up payment!',
  DUE_OVER_5_DAYS_Email_New_optionTitle: 'Email template for a new or good client',
  DUE_OVER_5_DAYS_Email_New_emailTemplateIdSubject: 'Do you have everything you need?',
  DUE_OVER_5_DAYS_Email_New_emailTemplateIdBody: 'Hi BILLING_CONTACT_NAME,\n\nI\'m following up on our conversation a few days ago. We haven\'t received the payment we were expecting. Is there anything that you still need from us? Have any issues popped up on your side. Please let me know once you have a status update.\n\nThanks, we look forward to speaking soon.',
  DUE_OVER_5_DAYS_Email_Erratic_optionTitle: 'Email template for an erratic client',
  DUE_OVER_5_DAYS_Email_Erratic_emailTemplateIdSubject: 'Do you have everything you need?',
  DUE_OVER_5_DAYS_Email_Erratic_emailTemplateIdBody: 'Hi BILLING_CONTACT_NAME,\n\nI\'m following up on our conversation a few days ago. The payment that we were expecting hasn\'t arrived. If there are any issues - logistics or otherwise - please let me know.\n\nWe appreciate your business and hope to receive the payment soon.\n\nThanks in advance.',
  DUE_OVER_5_DAYS_Email_Consistently_optionTitle: 'Email template for a consistently late client',
  DUE_OVER_5_DAYS_Email_Consistently_emailTemplateIdSubject: 'Do you have everything you need?',
  DUE_OVER_5_DAYS_Email_Consistently_emailTemplateIdBody: 'Hi BILLING_CONTACT_NAME,\n\nHope this finds you well. I\'m following up on our conversation from 10 days ago. The payment that we were expecting hasn\'t arrived. Can you let me know what the status of this payment is please? If there are any issues - logistics or otherwise - please let me know.\n\nSpeak soon,',


  //Due over 10 days
  DUE_OVER_10_DAYS_Phone_Title: 'Check-In with BILLING_CONTACT_NAME',
  DUE_OVER_10_DAYS_Phone_description: 'Check in with your client over the phone or in person; make sure all their questions are answered!',
  DUE_OVER_10_DAYS_Phone_New_optionTitle: 'Talking points for conversation with good or new client',
  DUE_OVER_10_DAYS_Phone_New_phoneTemplateIdSubject: 'Phone Script from PwC Small Business Services',
  DUE_OVER_10_DAYS_Phone_New_phoneTemplateIdBody: '\u2022 Sorry to bother you about this again. I\'m following up again on the recent work we did. Based on our last conversation, I was expecting a check by now and it hasn\'t arrived. Can you tell me what the status of that is? \n\n\u2022 I\'ll let you know as soon as I receive it, and please let me know if any problems emerge that may result in a delay. ',
  DUE_OVER_10_DAYS_Phone_New_audio: '10_days_late_erratic_payer',
  DUE_OVER_10_DAYS_Phone_Erratic_optionTitle: 'Talking points for conversation with erratic client',
  DUE_OVER_10_DAYS_Phone_Erratic_phoneTemplateIdSubject: 'Phone Script from PwC Small Business Services',
  DUE_OVER_10_DAYS_Phone_Erratic_phoneTemplateIdBody: '\u2022 Sorry to bother you about this again. I\'m following up again on the recent work we did. Based on our last conversation, I was expecting a check by now and it hasn\'t arrived. Can you tell me what the status of that is? \n\n\u2022 As I\'m sure you can understand it\'s important for us to process the payment as soon as we can so please let me know as soon as you can when we can expect it.\n\n\u2022 Likewise, I\'ll let you know as soon as we receive it.',
  DUE_OVER_10_DAYS_Phone_Erratic_audio: '10_days_late_erratic_payer',
  DUE_OVER_10_DAYS_Phone_Consistently_optionTitle: 'Talking points for conversation with consistently late client',
  DUE_OVER_10_DAYS_Phone_Consistently_phoneTemplateIdSubject: 'Phone Script from PwC Small Business Services',
  DUE_OVER_10_DAYS_Phone_Consistently_phoneTemplateIdBody: '\u2022 Sorry to bother you about this again. I\'m following up again on the recent work we did. Based on our last conversation, I was expecting a check by now and it hasn\'t arrived. Can you tell me what the status of that is? \n\n\u2022 As I\'m sure you can understand it\'s important for us to process the payment as soon as we can so please let me know as soon as you can when we can expect it.\n\n\u2022 Likewise, I\'ll let you know as soon as we receive it.',
  DUE_OVER_10_DAYS_Phone_Consistently_audio: '10_days_late_erratic_payer',
  DUE_OVER_10_DAYS_Email_Title: 'Email BILLING_CONTACT_NAME',
  DUE_OVER_10_DAYS_Email_description: 'If you did not already send one, a quick reminder email can speed up payment!',
  DUE_OVER_10_DAYS_Email_New_optionTitle: 'Email template for a new or good client',
  DUE_OVER_10_DAYS_Email_New_emailTemplateIdSubject: 'Do you have everything you need?',
  DUE_OVER_10_DAYS_Email_New_emailTemplateIdBody: 'Hi BILLING_CONTACT_NAME,\n\nI hope this finds you well. I\'m following up from our earlier conversation. I was expecting payment 10 days ago and it still hasn\'t arrived. Has anything unexpected cropped up? If yes, please let me know as soon as you can. If not, can you please let us know when we can expect the payment?\n\nThanks in advance.',
  DUE_OVER_10_DAYS_Email_Erratic_optionTitle: 'Email template for an erratic client',
  DUE_OVER_10_DAYS_Email_Erratic_emailTemplateIdSubject: 'Do you have everything you need?',
  DUE_OVER_10_DAYS_Email_Erratic_emailTemplateIdBody: 'Hi BILLING_CONTACT_NAME,\n\nI hope this finds you well. They payment we expected 10 days ago still hasn\'t arrived. Can you please let us know when we can expect the payment? If anything unexpected has cropped up which is causing a delay, please let us know. Please get back to me and let me know what the status is.\n\nThanks in advance',
  DUE_OVER_10_DAYS_Email_Consistently_optionTitle: 'Email template for a consistently late client',
  DUE_OVER_10_DAYS_Email_Consistently_emailTemplateIdSubject: 'Do you have everything you need?',
  DUE_OVER_10_DAYS_Email_Consistently_emailTemplateIdBody: 'Hi BILLING_CONTACT_NAME,\n\nI hope this finds you well. The payment we were expecting is now 10 days late. Can you please let me know when I can expect it as soon as you can? If there are any issues that has unexpectedly emerged, please let us know.\n\nThanks in advance.',


  //Due over 15 days
  DUE_OVER_15_DAYS_Phone_Title: 'Call BILLING_CONTACT_NAME',
  DUE_OVER_15_DAYS_Phone_description: 'Calling the billing contact for your client can often speed up this process.',
  DUE_OVER_15_DAYS_Phone_New_optionTitle: 'Talking points for conversation with good or new client',
  DUE_OVER_15_DAYS_Phone_New_phoneTemplateIdSubject: 'Phone Script from PwC Small Business Services',
  DUE_OVER_15_DAYS_Phone_New_phoneTemplateIdBody: '\u2022 Sorry to bother you about this again. I\'m following up again on the recent work we did. Based on our last conversation I was expecting a check by now and it still hasn\'t arrived. Can you tell me what the status of that is? \n\n\u2022 I\'m sure you can understand that it\'s really important for us to receive this payment as soon as we can. This money is how we pay our bills and our staff. \n\n\u2022 So if there is any issue is processing it please let us know as soon as you can. Or if you\'re in a tough patch and want to discuss a payment plan then please let\'s have that conversation as soon as we can. We want to be as fair as we can.',
  DUE_OVER_15_DAYS_Phone_New_audio: '15_days_late_new_client',
  DUE_OVER_15_DAYS_Phone_Erratic_optionTitle: 'Talking points for conversation with erratic client',
  DUE_OVER_15_DAYS_Phone_Erratic_phoneTemplateIdSubject: 'Phone Script from PwC Small Business Services',
  DUE_OVER_15_DAYS_Phone_Erratic_phoneTemplateIdBody: '\u2022 Sorry to bother you about this again. I\'m following up again on the recent work we did. Based on our last conversation I was expecting a check by now and it still hasn\'t arrived. Can you tell me what the status of that is? \n\n\u2022 I\'m sure you can understand that it\'s really important for us to receive this payment as soon as we can. This money is how we pay our bills and our staff. \n\n\u2022 So if there is any issue is processing it please let us know as soon as you can. Or if you\'re in a tough patch and want to discuss a payment plan then please let\'s have that conversation as soon as we can. We want to be as fair as we can.',
  DUE_OVER_15_DAYS_Phone_Erratic_audio: '15_days_late_erratic',
  DUE_OVER_15_DAYS_Phone_Consistently_optionTitle: 'Talking points for conversation with consistently late client',
  DUE_OVER_15_DAYS_Phone_Consistently_phoneTemplateIdSubject: 'Phone Script from PwC Small Business Services',
  DUE_OVER_15_DAYS_Phone_Consistently_phoneTemplateIdBody: '\u2022 Sorry to bother you about this again. I\'m following up again on the recent work we did. Based on our last conversation I was expecting a check by now and it still hasn\'t arrived. Do you have an update on the status of the payment?\n\n\u2022 As I\'m sure you can understand, it\'s really important for us to process this payment as soon as we can, so please let me know when we can expect it. This money is how we pay our bills and our staff. \n\n\u2022 So if there is any issue is processing it please let us know as soon as you can. Or if you\'re in a tough patch and want to discuss a payment plan then please let\'s have that conversation as soon as we can. We want to be as fair as we can.',
  DUE_OVER_15_DAYS_Phone_Consistently_audio: '15_days_late_always_late',
  DUE_OVER_15_DAYS_Email_Title: 'Email BILLING_CONTACT_NAME',
  DUE_OVER_15_DAYS_Email_description: 'Following up with your client will help them know what to do.',
  DUE_OVER_15_DAYS_Email_New_optionTitle: 'Email template for a new or good client',
  DUE_OVER_15_DAYS_Email_New_emailTemplateIdSubject: 'Is everything okay?',
  DUE_OVER_15_DAYS_Email_New_emailTemplateIdBody: 'Hi BILLING_CONTACT_NAME,\n\nI hope this finds you well. It has been 15 days since our payment was due and it still hasn\'t arrived. Is everything OK? Please let us know as soon as you can if a logistics issue or any other issue has emerged and how it can be resolved. If we need to explore a payment plan or other scenario, please let me know.\n\nI look forward to hearing from you.',
  DUE_OVER_15_DAYS_Email_Erratic_optionTitle: 'Email template for an erratic client',
  DUE_OVER_15_DAYS_Email_Erratic_emailTemplateIdSubject: 'Is everything okay?',
  DUE_OVER_15_DAYS_Email_Erratic_emailTemplateIdBody: 'Hi BILLING_CONTACT_NAME,\n\nI hope this finds you well. It has been 15 days since our payment was due and it still hasn\'t arrived. If any unexpected issues have emerged - logistics or otherwise - please let me know as sppn as you can so we can discuss options. If we need to explore a payment plan, or other scenarios, please let me know.\n\nI look forward to hearing from you.',
  DUE_OVER_15_DAYS_Email_Consistently_optionTitle: 'Email template for a consistently late client',
  DUE_OVER_15_DAYS_Email_Consistently_emailTemplateIdSubject: 'Is everything okay?',
  DUE_OVER_15_DAYS_Email_Consistently_emailTemplateIdBody: 'Hi BILLING_CONTACT_NAME,\n\nI hope this finds you well. It has been 15 days since our payment was due and it still hasn\'t arrived. If any unexpected issues have emerged - logistics or otherwise - please let me know as soon as you can so we can discuss options. If we need to explore a payment plan, or other scenarious, please let me know.\n\nWe want to be as fair as we can without jeopardizing our own financial situation. Please let me know as soon as you can how we can best proceed.',


  //Due over 30 days
  DUE_OVER_30_DAYS_Phone_Title: 'Call BILLING_CONTACT_NAME',
  DUE_OVER_30_DAYS_Phone_description: 'Call your client to discuss payment plans and billing options.',
  DUE_OVER_30_DAYS_Phone_optionTitle: 'Talking points for conversation',
  DUE_OVER_30_DAYS_Phone_phoneTemplateIdSubject: 'Phone Script from PwC Small Business Services',
  DUE_OVER_30_DAYS_Phone_phoneTemplateIdBody: '\u2022 Sorry to bother you about this again. I\'m following up again on the recent work we did. Based on our last conversation I was expecting a check by now and it still hasn\'t arrived. Can you tell me what the status of that is? \n\n\u2022 I\'m sure you can understand that it\'s important for us to receive this payment as soon as we can. At this stage, I need some of the money now.\n\n\u2022 Without some sort of payment, I can\'t keep accruing the expense of doing work I\'ll have no choice but to halt services.\n\n\u2022 We appreciate your business and want to be as fair as we can. But we can\'t put ourselves in a financially precarious position by working without getting paid.',
  DUE_OVER_30_DAYS_Phone_audio: '30_days_late_new_client',
  DUE_OVER_30_DAYS_Email_Title: 'Follow up with email to BILLING_CONTACT_NAME',
  DUE_OVER_30_DAYS_Email_description: 'Follow up the conversation with an email to make sure you are on the same page.',
  DUE_OVER_30_DAYS_Email_optionTitle: 'Template for follow-up email',
  DUE_OVER_30_DAYS_Email_emailTemplateIdSubject: 'Options for payment',
  DUE_OVER_30_DAYS_Email_emailTemplateIdBody: 'Hi BILLING_CONTACT_NAME,\n\nThanks for speaking with me earlier. I want to reiterate that we value your business and want to find a way to move forward in the most mutually beneficial and fair way. Here is a quick recap of our conversation: (REMOVE WHAT DOES NOT APPLY)\n\n\u2022 We will expect the first installment of the payment plan in the next 5 days.\n\n\u2022 These will be followed by installments on a monthly schedule until all payment obligations have been met.\n\nOR\n\n\u2022 We expect full payment in XX days.\n\nOR\n\n\u2022 We will extend the terms of this payment by XX days and will expect payment within 15 days from today.\n\nWe think that this is a fair and mutually beneficial scenario and appreciate your business.\n\nAll the best,',


  //Due over 45 days
  DUE_OVER_45_DAYS_Phone_Title: 'Call BILLING_CONTACT_NAME',
  DUE_OVER_45_DAYS_Phone_description: 'RECOMMENDED: Call your client to discuss payment plans and billing options.',
  DUE_OVER_45_DAYS_Phone_optionTitle: 'Talking points for conversation',
  DUE_OVER_45_DAYS_Phone_phoneTemplateIdSubject: 'Phone Script from PwC Small Business Services',
  DUE_OVER_45_DAYS_Phone_phoneTemplateIdBody: '\u2022 Sorry to bother you about this again. I\'m following up again on the recent work we did. Based on our last conversation I was expecting a check by now and it still hasn\'t arrived.\n\n\u2022 I\'m sure you can understand that I can\'t keep accruing the expense of doing the work without payment. If I don\'t get some of the payment now, I\'ll have no choice but to halt services. \n\n\u2022 We appreciate your business and want to be as fair as we can. We can\'t put ourselves in a financially precarious position by working without getting paid. ',
  DUE_OVER_45_DAYS_Phone_audio: '45_days_late_all_segments',
  DUE_OVER_45_DAYS_Email_Title: 'Follow up with email to BILLING_CONTACT_NAME',
  DUE_OVER_45_DAYS_Email_description: 'Follow up the conversation with an email to make sure you are on the same page.',
  DUE_OVER_45_DAYS_Email_optionTitle: 'Template for follow-up email',
  DUE_OVER_45_DAYS_Email_emailTemplateIdSubject: 'Options for payment',
  DUE_OVER_45_DAYS_Email_emailTemplateIdBody: 'Hi BILLING_CONTACT_NAME,\n\nThanks for speaking with me earlier. I want to reiterate that we value your business and want to find a way to move forward in the most mutually beneficial and fair way. Here is a quick recap of our conversation: (REMOVE WHAT DOES NOT APPLY)\n\n\u2022 We will expect the first installment of the payment plan in the next 5 days.\n\n\u2022 These will be follwed by installments on a monthly schedule until all payment obligations have been met.\n\nOR\n\n\u2022 We expect full payment in XX days.\n\nOR\n\n\u2022 We will extend the terms of this payment by XX days and will expect payment within 15 days from today.\n\nAND/OR\n\nIf I do not receive payment in the time allotted then I will have to discontinue providing service and would resume service one payment is received. (We hope and expect it will not come to this.)\n\nWe think that this is a fair and mutually beneficial scenario and appreciate your business.\n\nAll the best,',


  //Due over 90 days
  DUE_OVER_90_DAYS_Phone_Title: 'Call BILLING_CONTACT_NAME',
  DUE_OVER_90_DAYS_Phone_description: 'RECOMMENDED: Call your client to discuss payment and handle this delicate situation.',
  DUE_OVER_90_DAYS_Phone_optionTitle: 'Talking points for conversation',
  DUE_OVER_90_DAYS_Phone_phoneTemplateIdSubject: 'Phone Script from PwC Small Business Services',
  DUE_OVER_90_DAYS_Phone_phoneTemplateIdBody: '\u2022 Hi, I\'m sorry to have to make this call. We want to be a partner for you, but we haven\'t been paid for 90 days. This now puts us in a financially tenuous position. \n\n\u2022 We have made the decision to discontinue providing services. \n\n\u2022 We accrue new expenses everyday, so we need to collect on our invoices in order to stay in business. \n\n\u2022 We\'ve been as reasonable as we can and have offered payment plan options throughout. \n\n\u2022 Those options are still available and we can resume services once we receive payment. \n\n\u2022 Again, we appreciate the business, and want to find a financially viable way to keep working with you. \n\n\u2217 NOTE TO SELF: If you call a collections agency or sue them, you will likely never be able to do business with them again, and it may negatively affect your reputation (even if you are right).',
  DUE_OVER_90_DAYS_Email_Title: 'Follow up with email to BILLING_CONTACT_NAME',
  DUE_OVER_90_DAYS_Email_description: 'Follow up the conversation with an email to make sure you are on the same page.',
  DUE_OVER_90_DAYS_Email_optionTitle: 'Template for follow-up email',
  DUE_OVER_90_DAYS_Email_emailTemplateIdSubject: 'Payment Options',
  DUE_OVER_90_DAYS_Email_emailTemplateIdBody: 'Hi BILLING_CONTACT_NAME,\n\nThanks for speaking with me.\n\nAs we discussed earlier, we will discontinue providing service if we do not receive some payment within the next 5 days. \n\n(REMOVE WHAT DOES NOT APPLY)\n\nWe would resume service once payment is received in accordance with what we discussed:\n\n\u2022 We will expect the first installment of the payment plan in the next 5 days. \n\n\u2022 These will be followed by XX installments on a monthly schedule until all payment obligations have been met.\n\nOR\n\n\u2022 We expect full payment in XX days\n\nOR\n\n\u2022 We will extend the terms of this payment by XX days and will expect payment within XX days from today.\n\nWe value your business and hope we can continue working with you, but cannot continue generating expenses without payment from you.\n\nAll the best,',
};