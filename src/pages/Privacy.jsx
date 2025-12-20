import React from 'react'
import useDocumentTitle from '../utils/useDocumentTitle'

export default function Privacy() {
  useDocumentTitle('Privacy')

  return (
    <div className="page privacy container section">
      <h1>Privacy Notice</h1>

      <p>
        We respect your privacy. This notice explains what personal data we collect,
        why we collect it, how we use it, and the choices you have regarding your data.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect information you provide directly (for example, contact form entries),
        technical data automatically (such as IP address, browser type, and device information),
        and analytics data about how you use the site.
      </p>

      <h2>How We Use Information</h2>
      <p>
        We use the information to operate and improve our website and services, respond to
        inquiries, provide support, and for security and fraud prevention. We may also
        use aggregated or de-identified data for analytics and reporting.
      </p>

      <h2>Cookies and Tracking</h2>
      <p>
        We use cookies and similar technologies to provide site functionality and analytics.
        You can manage cookie preferences using the "Cookie Settings" control available
        on the site. Analytics will only run if you opt in to analytics cookies.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain personal data only as long as necessary for the purposes described or
        as required by law. If you have questions about retention periods, contact us.
      </p>

      <h2>Your Rights</h2>
      <p>
        Depending on your jurisdiction, you may have rights to access, correct, delete,
        or restrict processing of your personal data. To exercise these rights, please
        contact us using the details below.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We may share data with trusted third-party providers who perform services on our
        behalf (for example, analytics providers). These providers are obligated to protect
        your information and only use it for the purposes we specify.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about this privacy notice or our practices, please contact
        us through the contact form on the site.
      </p>
    </div>
  )
}
