---
title: Encryption Policy
tags:
  - policy
  - archive
---

> [!abstract] Legacy Policy Archive
> This is a raw text extraction of an original policy document authored during my tenure at a previous organization. It has been preserved here to demonstrate my experience in enterprise IT governance.

Encryption Policy
                                



Approval Date      4/21/2011

Approved By        Andrew Paisley

                   The purpose of this policy is to provide guidance on the use of
Purpose
                   encryption to protect information resources that contain, process, or
                   transmit confidential-sensitive information.
                   This policy applies to all CH employees and affiliates. It addresses
Audience
                   encryption policy and controls for confidential-sensitive data that is
                   at rest (including portable devices and removable media), data in
                   motion (transmission security), and encryption key standards and
                   management. This policy should be compatible with, but does not
                   supersede or guarantee compliance with all State and federal
                   encryption standards.



Policy          Encryption Strength
                Based on the data protection risk assessment described above, CH uses
                industry-standard technologies for encrypting confidential-sensitive
                data, unless documented through the exception process as described
                below.
                  • All encryption mechanisms implemented to comply with this
                    policy support a minimum of, but not limited to the industry
                    standard, AES 128-bit encryption.
                  • CH’s key length requirements will be reviewed annually and
                    upgraded as technology allows.

                Data at Rest
                 • Confidential-sensitive data at rest on computer systems owned by
                   and located within CH controlled spaces and networks must be
                   protected by at least one of the following:
                    – Encryption, or
                    – Firewalls with strict access.
                    – Sanitizing the data requiring protection during storage to
                       prevent unauthorized exposure (e.g., truncating last four digits
                       of a Primary Account Number, SSN, etc.).
                    – Other compensating controls including: e.g., complex
                       passwords, physical isolation/access.
                 • Password protection is used in combination with all controls

                                      
          Encryption Policy
                

   including encryption. Password protection alone is not an
   acceptable alternative to protecting confidential-sensitive
   information.
 • CH secures its backup and/or stored data on a (e.g., Storage Area
   Network/ Direct-Attached Storage) environment. All backup data
   sent offsite is protected using AES 128-bit encryption
   methodologies.
 • Computer hard drives or other storage media that have been
   encrypted shall be sanitized or destroyed upon de-commissioning
   to prevent unauthorized access.

Portable Devices
Portable devices represent a specific category of devices that contain
data-at-rest. Many incidents involving unauthorized exposure of
confidential-sensitive data are the result of stolen or lost Portable
Computing Devices. The best way to prevent these exposures is to
avoid storing confidential data on these devices. As a general practice,
confidential-sensitive data should not to be copied to or stored on a
portable computing device or a non-CH owned computing device.
However, in situations that require confidential-sensitive data to be
stored on such devices, encryption reduces the risk of unauthorized
disclosure in the event that the device becomes lost or stolen.

 • Group policy prevents most users from accessing, reading or
   writing to mass storage devices.
 • All users must obtain specific permission from CH management
   before storing confidential-sensitive data on a portable computing
   device or a non-CH owned computing device.
 • Confidential-sensitive information stored on portable devices must
   be encrypted using products and/or methods approved by the CH
   IT Department.
 • Portable devices should not be used for the long-term storage of
   any Confidential-sensitive information.
 • Portable devices that store or transmit confidential-sensitive
   information must have the proper protection mechanisms installed,
   including such as antivirus or firewall software.
 • Removable media including CD-ROMs, floppy disks, backup
   tapes, USB memory drives, etc that contain confidential-sensitive
   information must be encrypted and stored in a secure, locked
   location.
 • Removable media including CD-ROMs, floppy disks, backup
   tapes, USB memory drives, etc. that contain confidential-sensitive
   information must be transported in a secure manner, (e.g. Iron

                       
         Encryption Policy
                

   Mountain courier, electronically tracked package).
 • The receiver of the removable media must be identified to ensure
   the person requesting the data is the one claimed.
 • CH will inventory encrypted devices and validate implementation
   of encryption products at least annually.
 • Data owners and users of portable computing devices and non-CH
   owned computing devices containing confidential data must
   acknowledge how they will ensure that data are encrypted and how
   encrypted data will be accessible by the owner in the event that an
   encryption key becomes lost or forgotten. Methods to meet this
   requirement include:
     – Maintaining an accessible copy of the data on a server managed
       by the Entity, using procedures specified by CH.
     – Use of whole-disk encryption technologies that provide an
       authorized systems administrator access to the data in the event
       of a forgotten key.
     – Escrowing the encryption key with a trusted party designated
       by the data owner and the CH IT Director.

Transmission Security
Users will follow CH acceptable use policies when transmitting data
and must take particular care when transmitting or re-transmitting
confidential-sensitive data.
 • Email communications are transmitted using Opportunistic TLS
   encryption at the server level.
 • Any confidential-sensitive information transmitted through a public
   network (e.g., Internet) to and from vendors, customers, or entities
   doing business with CH must be encrypted or be transmitted
   through an encrypted tunnel that is encrypted with secure socket
   layers (SSL).
 • Transmitting unencrypted confidential-sensitive information
   through the use of third-party web email programs (e.g Gmail,
   Hotmail, Yahoo, etc.) is not permitted.
 • The download or installation of any Instant Messaging (IM) or
   online peer-to-peer (P2P) file sharing programs is not permitted
   and is blocked via firewall rules.
 • Encryption is required when users access CH data remotely from a
   shared network.
 • CH does not permits (blocked via firewall rules) the secure
   encrypted transfer of documents and data over the Internet using
   file transfer programs such as “secured FTP” (FTP over SSH) and
   SCP.

                      
          Encryption Policy
                

 • Plain FTP Uploading does not provide encrypted transmission and
   is blocked via firewall rules.

Certificates/PKI
The use of wildcard certificates is hereby prohibited.

Encryption Key Management
Effective key management is the crucial element for ensuring the
security of any encryption system. Key management procedures must
ensure that authorized users can access and decrypt all encrypted data
using controls that meet operational needs and comply with data
retention requirements. CH key management systems are characterized
by the following security precautions:
  • CH uses procedural controls to enforce the concepts of least
    privilege and separation of duties for personnel. The IT Director
    will verify backup storage for Key passwords, Files, and related
    backup configuration data to avoid single point of failure and
    ensure access to encrypted data.
      – To ensure separation of duties and two person controls, the IT
        Director, Systems Administrator, Information Security Officer
        and a managing partner/executive are responsible for
        encryption key management functions.
      – Background checks and clearance procedures required for the
        personnel.
  • Keys in storage and transit must be encrypted.
  • Private keys must be kept confidential.
  • Keys that are transmitted are sent securely to well-authenticated
    parties.
  • Key-generating equipment is physically and logically secure from
    construction through receipt, installation, operation, and removal
    from service.
  • Split knowledge and dual control of cryptographic keys (for
    example, requiring two or more people, each knowing only their
    own key component, to reconstruct the whole key), shall be
    established for manual clear-text key-management operations.
  • Key-encryption keys must be stored separately from data-encrypted
    keys.
  • Keys must be changed when there is a possibility of compromise
    and/or critical key management staff separate from the company.




                       
                                 Encryption Policy
                                       



                       Procedure for creating Dual-Control and Split-Knowledge Keys
                       This procedure requires two pairs of data custodians-- a primary and a
                       secondary pair.

                       The primary data custodians generate the actual encryption key for the
                       application or service and log the key-generating passcode to a file.
                       The file is, in turn, encrypted by the primary data custodians with a
                       passcode known only to them.

                       The secondary data custodians receive the encrypted file and, in turn,
                       create a newly encrypted file using the content of the original
                       encrypted file but secure it with a different passcode. The secondary
                       data custodians have exclusive knowledge of the proper passcode to
                       decrypt this secondary file.

                       Both the original file and the version as encrypted by the primary data
                       custodians should be securely deleted once the version as encrypted by
                       the secondary data custodians is established and verified.

                       The final encrypted file should be stored in a location which insures
                       access and security as designated by the IT Director.

                       Each data custodian will be held responsible for storing their passcode
                       in safe, secure, and available manner.

                       This procedure will be tested periodically to insure compliance,
                       efficiency, and operability.


                       Violation of this policy, [e.g., willful or negligent exposure of
Disciplinary Actions
                       confidential information,] may result in disciplinary action which may
                       include termination of employment, dismissal, or suspension.




                                             
                            Encryption Policy
                                     

                                     Revision History
REVISION DATE       APPROVAL DATE          REQUESTED BY            DESCRIPTION
  Initial Version      4/19/2011               JDC
                       10/6/2014               PMC           Reviewed – no changes
                                                             needed
                       02/16/2015                RPD         Reviewed – no changes
                                                             needed
                        02/16/16                 RPD         Annual review
                          6/1/17                 PMC         Annual review
     8/21/17           9/8/17 AAP                TMS         Add split-knowledge
                                                             language
     6/26/18                                     PMC         Annual review – updated
                                                             firm name
   04-19-2019         7/1/2019 RRH               TMS         Brief addition to prohibit use
                                                             of wildcard certificates
     2/7/20            2/7/20 LEC                TMS         Added group policy
                                                             prevention – accessing mass
                                                             storage devices.