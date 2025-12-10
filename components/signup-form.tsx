"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    phoneNumber: "",
    address: "",
    email: "",
    bankName: "",
    accountName: "",
    accountNumber: "",
    city: "",
    state: "",
    gender: "",
    age: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-white to-[#F0FFF0]">
      <div className="max-w-3xl mx-auto">
        <Card className="border-2 shadow-lg">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl md:text-4xl font-bold text-[#0A0F29]">
              Join Global Team Builders
            </CardTitle>
            <CardDescription className="text-lg text-[#848794]">
              Fill in your details to get started on your journey to wealth and success
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#0A0F29] font-semibold">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                {/* Username */}
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-[#0A0F29] font-semibold">
                    Username <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Choose a username"
                    value={formData.username}
                    onChange={(e) => handleChange("username", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-[#0A0F29] font-semibold">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={(e) => handleChange("phoneNumber", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#0A0F29] font-semibold">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                {/* Address */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address" className="text-[#0A0F29] font-semibold">
                    Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="Enter your full address"
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                {/* City */}
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-[#0A0F29] font-semibold">
                    City <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                {/* State */}
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-[#0A0F29] font-semibold">
                    State <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="state"
                    type="text"
                    placeholder="Enter your state"
                    value={formData.state}
                    onChange={(e) => handleChange("state", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-[#0A0F29] font-semibold">
                    Gender <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) => handleChange("gender", value)}
                    required
                  >
                    <SelectTrigger id="gender" className="h-11 w-full">
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Age */}
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-[#0A0F29] font-semibold">
                    Age <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={(e) => handleChange("age", e.target.value)}
                    required
                    min="18"
                    className="h-11"
                  />
                </div>

                {/* Bank Name */}
                <div className="space-y-2">
                  <Label htmlFor="bankName" className="text-[#0A0F29] font-semibold">
                    Bank Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="bankName"
                    type="text"
                    placeholder="Enter your bank name"
                    value={formData.bankName}
                    onChange={(e) => handleChange("bankName", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                {/* Account Name */}
                <div className="space-y-2">
                  <Label htmlFor="accountName" className="text-[#0A0F29] font-semibold">
                    Account Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="accountName"
                    type="text"
                    placeholder="Enter account holder name"
                    value={formData.accountName}
                    onChange={(e) => handleChange("accountName", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                {/* Account Number */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="accountNumber" className="text-[#0A0F29] font-semibold">
                    Account Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="accountNumber"
                    type="text"
                    placeholder="Enter your account number"
                    value={formData.accountNumber}
                    onChange={(e) => handleChange("accountNumber", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-[#5C4DFF] hover:bg-[#5C4DFF]/90 text-white text-lg py-6 rounded-full font-semibold shadow-lg"
                >
                  Sign Up Now
                </Button>
              </div>

              <p className="text-center text-sm text-[#848794]">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

