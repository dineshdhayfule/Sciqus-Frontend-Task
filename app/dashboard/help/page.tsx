"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, Mail, FileText, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/page-transition"
import FadeIn from "@/components/fade-in"

export default function HelpPage() {
  const faqs = [
    {
      question: "How do I get started?",
      answer:
        "To get started, sign up for an account and follow our onboarding guide. It will take just a few minutes to set up your first project.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team via email at support@example.com or use the live chat feature available 24/7.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription anytime from your account settings. No questions asked.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service.",
    },
    {
      question: "How is my data secured?",
      answer: "We use industry-standard encryption and follow best practices to ensure your data is always secure.",
    },
  ]

  const resources = [
    { icon: FileText, title: "Documentation", description: "Complete guides and API reference" },
    { icon: MessageSquare, title: "Community Forum", description: "Connect with other users" },
    { icon: Mail, title: "Email Support", description: "Get help from our support team" },
  ]

  return (
    <PageTransition>
      <div className="grid gap-6 p-4 md:p-6">
        <FadeIn>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Help & Support</h1>
            <p className="text-muted-foreground">Find answers and get support when you need it</p>
          </div>
        </FadeIn>

        {/* Quick Resources */}
        <FadeIn delay={0.1}>
          <div className="grid gap-4 md:grid-cols-3">
            {resources.map((resource) => (
              <Card
                key={resource.title}
                className="bg-card border-card-border hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <CardHeader>
                  <resource.icon className="h-8 w-8 text-sidebar-primary mb-2" />
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-input text-foreground hover:bg-background bg-transparent transition-transform hover:scale-105 active:scale-95"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn delay={0.2}>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="grid gap-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-card border-card-border hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <HelpCircle className="h-4 w-4 text-sidebar-primary" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Contact Section */}
        <FadeIn delay={0.3}>
          <Card className="bg-card border-card-border hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Still need help?</CardTitle>
              <CardDescription>Reach out to our support team and we'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-sidebar-primary hover:bg-sidebar-primary/90 text-sidebar-primary-foreground transition-transform hover:scale-105 active:scale-95">
                  Contact Support
                </Button>
                <Button variant="outline" className="border-input text-foreground hover:bg-background bg-transparent transition-transform hover:scale-105 active:scale-95">
                  Schedule a Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </PageTransition>
  )
