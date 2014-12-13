package dwint.pricing.pipeline;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.ServletException;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import atg.core.util.StringUtils;
import atg.servlet.DynamoHttpServletRequest;
import atg.servlet.DynamoHttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import dw.validations.ValidationRules;
import dw.validations.ValidationRulesHolder;
import dwint.common.tools.GenericConstants;

/**
 * This Servlet class is populating JSON Rules into ValidationRules java Object from JS file for site user.
 */

public class RuleValidatorServlet extends XtendInsertableServletImpl {

    private ValidationRulesHolder validationRulesHolder;
    private static final String VALIDATION_RULES = "validationRules";
    private Map<String, String> filePathMap;
    private static final String DEFAULT_STR = "default";
    private GenericConstants genericConstants;
    private ArrayList<String> mSkippedPagesList;

    public void service(DynamoHttpServletRequest pRequest, DynamoHttpServletResponse pResponse) throws IOException, ServletException {

        String requestURI = pRequest.getRequestURI();
        // Ignore list of files defined in skipList.
        if (isIgnorePage(requestURI)) {
            passRequest(pRequest, pResponse);
            return;
        }
        // Get user locale and calling setValidatorRules method to set validation rules.
        String locale = pRequest.getRequestLocale().getLocale().toString();
        if (getGenericConstants().isJsonRuleValidationEnabled()) {
            setValidatorRules(locale);
        }
        passRequest(pRequest, pResponse);
    }

    /**
     * This Method Read JSON file and Create JSON object.Then populate all JSON Rules into ValidationRules's java Object and then Sets the validation
     * rules.
     */
    private void setValidatorRules(String pSiteLocale) {

        if (isLoggingDebug()) {
            logDebug(new StringBuilder().append("setValidatorRules() --- Start").append("With Input Parameters pSiteLocale :").append(pSiteLocale)
                    .toString());
        }
        // creating object of validationRules holding validation Rule

        List<ValidationRules> validationList = new ArrayList<ValidationRules>();
        JSONArray validationRulesJson = null;
        // Get a Iterator to iterate over all Map entries.
        Iterator<Entry<String, String>> iter = getFilePathMap().entrySet().iterator();
        try {
            while (iter.hasNext()) {
                String locale = (String) iter.next().getKey();
                String filePath = getFilePathMap().get(locale);
                // match site locale with locale defined in Map.
                if (!StringUtils.isEmpty(filePath) && locale.equalsIgnoreCase(pSiteLocale)) {
                    // calling getValidationJsonObject method returns All validation in JSON Array Object
                    validationRulesJson = getValidationJsonObject(filePath);
                    // calling populateValidationRule method convert JSON array Object into Java Objects and return all list of validationRules java
                    // object
                    validationList = populateValidationRule(validationRulesJson, validationList);
                }
            }
            // if site locale does not any locale defined in Map.then it pick pick default JSON file defined in Map
            if (validationList.isEmpty()) {
                String filePath = getFilePathMap().get(DEFAULT_STR);
                validationRulesJson = getValidationJsonObject(filePath);
                validationList = populateValidationRule(validationRulesJson, validationList);
            }
        } catch (IOException ioe) {
            logError(ioe.getMessage(), ioe);
            return;
        } catch (org.json.simple.parser.ParseException pe) {
            logError(pe.getMessage(), pe);
            return;

        }
        // This will set all rules against a key into the ValidationRulesHolder so that Any component can access it.
        getValidationRulesHolder().setValidationRulesList(validationList);

        if (isLoggingDebug()) {
            logDebug(new StringBuilder().append("setValidatorRules() --- End").append("With outPut Parameters validationList :")
                    .append(validationList).toString());
        }
    }

    /**
     * This method reads file and parse into JSON object and return all Validation in JSON array.
     * 
     * @param pFilePath
     *            the file path
     * @return the validation JSON object
     * @throws IOException
     *             Signals that an I/O exception has occurred.
     * @throws ParseException
     *             the parse exception
     */
    private JSONArray getValidationJsonObject(String pFilePath) throws IOException, ParseException {

        if (isLoggingDebug()) {
            logDebug(new StringBuilder().append("getValidationJsonObject() --- Start").append("With Input Parameters pFilePath :").append(pFilePath)
                    .toString());
        }
        BufferedReader reader = null;
        JSONParser parser = new JSONParser();
        // passing JSON file path location for reading all JSON files defined in Map.
        reader = new BufferedReader(new InputStreamReader(new FileInputStream(pFilePath), Charset.defaultCharset()));
        Object obj = parser.parse(reader);

        // Type casting into JSON Object
        JSONObject jsonObject = (JSONObject) obj;

        // Get all validation Rules in validationRulesJson JSON Array
        JSONArray validationRulesJson = (JSONArray) jsonObject.get(VALIDATION_RULES);

        if (isLoggingDebug()) {
            logDebug(new StringBuilder().append("getValidationJsonObject() --- End").append("With Output Parameters validationRulesJson :")
                    .append(validationRulesJson).toString());
        }
        return validationRulesJson;
    }

    /**
     * This method populating Java objects from JSON Array and returns List of ValidationRules object.
     * 
     * @param validationRulesJson
     *            the validation rules JSON
     * @param validationList
     *            the validation list
     * @return the list
     */
    @SuppressWarnings("unchecked")
    private List<ValidationRules> populateValidationRule(JSONArray validationRulesJson, List<ValidationRules> validationList) {

        if (isLoggingDebug()) {
            logDebug(new StringBuilder().append("populateValidationRule() --- Start").append("With Input Parameters validationRulesJson :")
                    .append(validationRulesJson).append("validationList :").append(validationList).toString());
        }
        // creating GSON object for populating JSON object in Java Object
        Gson gson = new GsonBuilder().create();

        // Get the iterator for iterating over all rules defined in JSON File.
        Iterator<String> rulesIt = validationRulesJson.iterator();

        // Iterating over rules and populate java object from JSON Object and then set into the list of validationRules
        int i = 0;
        while (rulesIt.hasNext()) {
            ValidationRules rule = gson.fromJson(validationRulesJson.get(i).toString(), ValidationRules.class);
            validationList.add(rule);
            rulesIt.next();
            i++;
        }

        if (isLoggingDebug()) {
            logDebug(new StringBuilder().append("populateValidationRule() --- End").append("With Output Parameters validationList :")
                    .append(validationList).toString());
        }
        return validationList;

    }

    /**
     * This method checks whether the request page needs to be ignored for this functionality
     * 
     * @param requestURI
     * @return
     */
    private boolean isIgnorePage(String requestURI) {
        for (String skippedPage : getSkippedPagesList()) {
            if (requestURI.contains(skippedPage)) {
                return true;
            }
        }
        return false;
    }

    // -----------------------------------------------------------------------------
    public ValidationRulesHolder getValidationRulesHolder() {
        return validationRulesHolder;
    }

    public void setValidationRulesHolder(ValidationRulesHolder validationRulesHolder) {
        this.validationRulesHolder = validationRulesHolder;
    }

    // -----------------------------------------------------------------------------
    public Map<String, String> getFilePathMap() {
        return filePathMap;
    }

    public void setFilePathMap(Map<String, String> filePathMap) {
        this.filePathMap = filePathMap;
    }

    // -----------------------------------------------------------------------------
    public GenericConstants getGenericConstants() {
        return genericConstants;
    }

    public void setGenericConstants(GenericConstants genericConstants) {
        this.genericConstants = genericConstants;
    }

    // -----------------------------------------------------------------------------
    public ArrayList<String> getSkippedPagesList() {
        return this.mSkippedPagesList;
    }

    public void setSkippedPagesList(ArrayList<String> pSkippedPagesList) {
        this.mSkippedPagesList = pSkippedPagesList;
    }

}
