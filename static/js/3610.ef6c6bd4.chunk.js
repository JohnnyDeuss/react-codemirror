"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3610],{73610:function(n,e,s){s.r(e),e.default='Imports System\nImports System.Collections.Generic\n\nModule Module1\n\n    Sub Main()\n        Dim a As New M8Ball\n\n        Do While True\n\n            Dim q As String = ""\n            Console.Write("ask me about the future... ")\n            q = Console.ReadLine()\n\n            If q.Trim <> "" Then\n                Console.WriteLine("the answer is... {0}", a.getAnswer(q))\n            Else\n                Exit Do\n            End If\n        Loop\n\n    End Sub\n\nEnd Module\n\nClass M8Ball\n\n    Public Answers As System.Collections.Generic.Dictionary(Of Integer, String)\n\n    Public Sub New()\n        Answers = New System.Collections.Generic.Dictionary(Of Integer, String)\n        Answers.Add(0, "It is certain")\n        Answers.Add(1, "It is decidedly so")\n        Answers.Add(2, "Without a doubt")\n        Answers.Add(3, "Yes, definitely")\n        Answers.Add(4, "You may rely on ")\n        Answers.Add(5, "As I see it, yes")\n        Answers.Add(6, "Most likely")\n        Answers.Add(7, "Outlook good")\n        Answers.Add(8, "Signs point to yes")\n        Answers.Add(9, "Yes")\n        Answers.Add(10, "Reply hazy, try again")\n        Answers.Add(11, "Ask again later")\n        Answers.Add(12, "Better not tell you now")\n        Answers.Add(13, "Cannot predict now")\n        Answers.Add(14, "Concentrate and ask again")\n        Answers.Add(15, "Don\'t count on it")\n        Answers.Add(16, "My reply is no")\n        Answers.Add(17, "My sources say no")\n        Answers.Add(18, "Outlook not so")\n        Answers.Add(19, "Very doubtful")\n    End Sub\n\n    Public Function getAnswer(theQuestion As String) As String\n        Dim r As New Random\n        Return Answers(r.Next(0, 19))\n    End Function\n\nEnd Class\n'}}]);