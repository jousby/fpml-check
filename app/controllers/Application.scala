package controllers

import play.api._
import play.api.mvc._
import play.api.data._
import play.api.data.Forms._


object Application extends Controller {

  val fpmlSubmissionForm = Form[String]("xmlString" -> text)
    
  def index = Action {
    Ok(views.html.index(fpmlSubmissionForm))
  }

  def validateFpml = Action { implicit request ⇒
    fpmlSubmissionForm.bindFromRequest().fold(
      errors ⇒ BadRequest(errors.errorsAsJson.toString),
      xmlString ⇒ {
        Logger.debug("Submitted xml: " + xmlString)
        Thread.sleep(4000)
        Ok
      })
  }
  
}