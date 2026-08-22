---
title: Data Classification Policy
tags:
  - policy
  - archive
---

> [!abstract] Legacy Policy Archive
> This is a raw text extraction of an original policy document authored during my tenure at a previous organization. It has been preserved here to demonstrate my experience in enterprise IT governance.

Information Asset and Data Classification Policy
                                         


Approval Date               December 5, 2011

Approved By                 Andrew Paisley

Purpose                 To educate staff members of the importance of protecting data
                        generated, accessed, transmitted, stored and destroyed by Clunk,
                        Hoose Co., LPA (CH); to identify procedures that are in place to
                        protect the confidentiality, integrity and availability of CH data; and to
                        comply with federal regulations regarding privacy and confidentiality
                        of information.



   1. Scope
   All staff members of  (CH) have a responsibility to protect the
   confidentiality, integrity and availability of data generated, accessed, modified, transmitted, stored or
   destroyed, irrespective of the medium on which the data resides.

   Departments are responsible for implementing appropriate managerial, operational, physical and
   technical controls for access to, use of, transmission of, and disposal of data in compliance with this
   policy.

   Data owned, used, created or maintained by CH is classified into the following three categories:

         Public Information - 2.1
         Nonpublic Personal Information (NPI) 2.2
         Personally identifiable information 2.2
         Restricted Information 2.3

   2. Data Classification
   To classify your data, you must start by understanding what the classifications are. There are
   specific laws and regulations that govern some kinds of data. Additionally, there are situations
   where you must consider whether the confidentiality, integrity or availability of the data is a factor.

      2.1 Public Information:

          Approved for general release to the public-does not identify an individual. Such data has no
          requirement for confidentiality. (marketing materials, company brochures, public
          information-court pleadings, certain recorded documents)
          Handling:
           Public Information data requires no special handling, items may be freely exchanged by
              staff, court, vendors and other interested parties.



                                            
Information Asset and Data Classification Policy
                                   

     Encryption:
      No encryption is required
     Destruction/Disposition:
      Documents are retained pursuant to client and professional responsibility guidelines.
        Hard copy is shredded and electronic copies are deleted after ten years from the data
        case/matter is closed

  2.2 Nonpublic Personal Information (NPI) or Personally Identifiable Information (PII):
      Requires restricted access to authorized associates and clients who are bound by
      confidentiality agreement(s) and have a legitimate purpose for accessing such data; could
      cause damage to an individual or to the company if disclosed to an unauthorized party. Any
      data that can identify an individual. (names, addresses, policies, service level agreements,
      employee performance review, loan number, social security number, homeowner name, any
      protected health information)

     Handling:
      Must not be posted on any public website
      When sent via fax must be sent only to a previously established and used address or one
       that has been verified as using a secured location
      Must be stored in a closed container, file cabinet, drawer, closed office or department
       where physical controls are in place to prevent disclosure when not in use.
      Data must be guarded due to proprietary, ethical or privacy considerations and must be
       protected from unauthorized access, modification, transmission, storage or other use.
       This classification applies even though there may not be a civil statute requiring same

     Encryption:
      Network architecture utilizes a DMZ; no data is stored in the DMZ and all data
        transmitted to and from the DMZ is encrypted
      Data must be stored encrypted at rest
      Data must be transmitted via TLS/SMTPS AES256 or STARTTLS AES256
      Data must be transmitted via HTTPS/TLS over the web

     Technical Controls
        The Information Security team has put in place a Data Loss Prevention system that
        searches and blocks/notifies of any data that may be sent through all data transmissions
        channels (eg. HTTP, HTTPS, EMAIL, Encryption) that may fall in the realm of PII, PCI-
        DSS, SOX, GLBA, and other Financial Information.

         Logs are monitored by criticality of the data transmitted. Notifications are reviewed as
         received.

     Destruction/Disposition:
      Hard-copy is securely shredded and electronic copies are securely erased after ten years
        from the date the case/matter is closed

                                      
Information Asset and Data Classification Policy
                                    


   2.3 Restricted Information:
       Can be shared ONLY with management and authorized associates who need the information
       to support CH (contracts, information labeled “restricted”, mergers/acquisitions, earning
       statements)
       Handling:
        All guidelines that apply to Nonpublic Personal Information (NPI) apply to restricted
           information.
        Must not be disclosed to parties without explicit management authorization
        Special handling is required for client original documents – see Original Document
           Intake and Return Procedure.

       Encryption:
        Network architecture utilizes a DMZ; no data is stored in the DMZ and all data
          transmitted to and from the DMZ is encrypted via TLS AES256
        Data must be stored encrypted at rest
        Data must be transmitted via TLS/SMTPS AES256 or STARTTLS AES256
        Data must be transmitted via HTTPS/TLS over the web

       Destruction/Disposition:
        Hard-copy is securely shredded and electronic copies are securely erased after ten years
          from the date the case/matter is closed


       Technical Controls
       The Information Security team has put in place a Data Loss Prevention system that searches
       and blocks/notifies of any data that may be sent through all data transmissions channels (eg.
       HTTP, HTTPS, EMAIL, Encryption) that may fall in the realm of PII, PCI-DSS, SOX,
       GLBA, and other Financial Information.

       Logs are monitored by criticality of the data transmitted. Notifications are reviewed as
       received.

3. Non-Compliance with this policy
Non-Compliance with these standards may result in revocation of system or network access,
notification of team leaders, and/or disciplinary action up to termination.




                                       
 Information Asset and Data Classification Policy
                                    

                                     Revision History
REVISION DATE       APPROVAL DATE          REQUESTED BY           DESCRIPTION
  Initial Version       10/25/11               AAP
     11/30/11           11/30/11               AAP          Updated for treatment of
                                                            each class as to handling,
                                                            encryption and destruction
     10/6/14            10/6/14                      PMC    Reviewed – no changes
                                                            needed
     4/27/15          4/27/15 AAP                    RPD    added section 3 technical
                                                            controls to desc. DLP.
     3/22/16          3/22/16 AAP                    RPD    Annual review – no changes
     5/13/16          5/13/16 AAP                    RPD    Added encryption
                                                            requirements to data
                                                            classification.
      6/1/17             6/1/17                  PMC        Annual review – no changes
     1/16/18            1/16/18                  PMC        Updated firm name
     3/21/18          4/3/18 RRH               LEC/PMC      Annual review – changed
                                                            notification review frequency
                                                            to “as received”
     1/21/19         4/23/2019 LEC                   RPG    Spelling
      2/7/20           2/7/20 LEC                    TMS    Annual review – no changes